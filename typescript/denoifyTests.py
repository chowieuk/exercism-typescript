import sys
import re

bddImports = 'describe, it'
beforeEach = False
afterEach = False

with open(sys.argv[1]) as file:
	data = file.readlines()

if data[0][-2] == ";":
    data[0] = data[0][:-3] + ".ts" + data[0][-3:]
else:
    data[0] = data[0][:-2] + ".ts" + data[0][-2:]

data.insert(2,"import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'\n\n")
toThrowError_re = re.compile(r'toThrow\(new Error\((.+?)\)\)')

for i, line in enumerate(data):
    lineStripped = line.lstrip()
    if lineStripped.startswith('xit('):
        data[i] = line.replace('xit(','it.ignore(')
        continue
    if lineStripped.startswith('it.skip('):
        data[i] = line.replace('it.skip(','it.ignore(')
        continue
    if lineStripped.startswith('beforeEach('):
        beforeEach = True
        continue
    if lineStripped.startswith('afterEach('):
        afterEach = True
    if lineStripped.find('toThrowError'):
        line.replace('toThrowError', 'toThrow')

    # Convert toThrow(new Error($ErrorString)) to toThrow($ErrorString)
    data[i] = toThrowError_re.sub(r'toThrow(\1)', line)

if beforeEach:
    bddImports += ', beforeEach'

if afterEach:
    bddImports += ', afterEach'

data.insert(1,"import { " + bddImports + " } from 'https://deno.land/std@0.177.0/testing/bdd.ts'")

with open(sys.argv[1], 'w') as file:
    file.writelines(data) 
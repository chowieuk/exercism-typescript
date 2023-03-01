import sys

bddImports = 'describe, it'
beforeEach = False
afterEach = False

with open(sys.argv[1]) as file:
	data = file.readlines()

data[0] = data[0][:-2] + ".ts" + data[0][-2:]
data.insert(2,"import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'\n\n")
for i, line in enumerate(data):
    if line.startswith('  xit('):
        data[i] = line.replace('xit(','it(')
        continue
    if line.startswith('  it.skip('):
        data[i] = line.replace('it.skip(','it.ignore(')
        continue
    if line.startswith('  beforeEach('):
        beforeEach = True
        continue
    if line.startswith('  afterEach('):
        afterEach = True

if beforeEach:
    bddImports += ', beforeEach'

if afterEach:
    bddImports += ', afterEach'

data.insert(1,"import { " + bddImports + " } from 'https://deno.land/std@0.177.0/testing/bdd.ts'")

with open(sys.argv[1], 'w') as file:
    file.writelines(data) 
import sys

with open(sys.argv[1]) as file:
	data = file.readlines()

importThrows = False
importAssert = False

#TODO: if first line ends in a ';', or if it's my fault these ';' are popping up.
#TODO: need to account for "toBe"
#TODO: need to account for "toThrowError"

data[0] = data[0][:-2] + ".ts" + data[0][-2:]
data.insert(1,'import { describe, it } from "https://deno.land/std@0.177.0/testing/bdd.ts"')
data.insert(3,'import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts"\n\n')
for i, line in enumerate(data):
    if line.startswith('    expect('):
        if line.count('toEqual(') > 0:
            line = line.replace('expect(','assertEquals(')
            line = line.replace(').toEqual(',',')
        elif line.count('toBe(') > 0:
            line = line.replace('expect(','assertEquals(')
            line = line.replace(').toBe(',',')
        elif line.count('toThrowError(') > 0:
            importThrows = True
            line = line.replace('expect(','assertThrows(')
            line = line.replace(').toThrowError(',', Error, ')
        elif line.count('toBeGreaterThanOrEqual(') > 0:
            importAssert = True
            line = line.replace('expect(','assert(')
            line = line.replace(').toBeGreaterThanOrEqual(',' >= ')

        data[i] = line

if importThrows:
    data[3] = data[3][:21] + ", assertThrows" + data[3][21:]
if importAssert:
    data[3] = data[3][:21] + ", assert" + data[3][21:]

with open(sys.argv[1], 'w') as file:
    file.writelines(data) 
import sys

with open(sys.argv[1]) as file:
	data = file.readlines()

#TODO: check if first line ends in a ';'
#TODO: need to account for "toBe"
#TODO: need to account for "toThrowError"
data[0] = data[0][:-2] + ".ts" + data[0][-2:]
data.insert(1,"""import { describe, it } from "https://deno.land/std@0.177.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";""")
for i, line in enumerate(data):
    if line.startswith('    expect('):
        line = line.replace('expect(','assertEquals(')
        line = line.replace(').toEqual(',',')
        data[i] = line

with open(sys.argv[1], 'w') as file:
    file.writelines(data) 
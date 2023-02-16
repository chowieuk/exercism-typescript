import sys

with open(sys.argv[1]) as file:
	data = file.readlines()

data[0] = data[0][:-2] + ".ts" + data[0][-2:]
data.insert(1,"import { describe, it } from 'https://deno.land/std@0.177.0/testing/bdd.ts'")
data.insert(3,"import { expect } from 'https://deno.land/x/expect@v0.3.0/mod.ts'\n\n")
for i, line in enumerate(data):
    data[i] = line.replace('xit(','it(')

with open(sys.argv[1], 'w') as file:
    file.writelines(data) 
import os
import sys
import re
import subprocess
import argparse

def denoify(folder=None):
    bddImports = 'describe, it'
    beforeEach = False
    afterEach = False
    test_file_name = None

    delete_files = [".eslintignore", ".eslintrc.cjs", "babel.config.cjs", "package.json", "tsconfig.json", "jest.config.cjs"]

    if folder:
        try: os.chdir(folder)
        except NotADirectoryError:
            print(f"Error: {folder} is not a valid directory")
            return

    for file_name in os.listdir():
        if file_name in delete_files:
            os.remove(file_name)
            continue

        if file_name.endswith('.test.ts'):
            test_file_name = file_name
            continue

    if not test_file_name:
        print(os.getcwd())
        print("No test file found.")
        return

    with open(test_file_name) as file:
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

    with open(test_file_name, 'w') as file:
        file.writelines(data) 

    print(f"Tests updated in {os.getcwd()}.")
    return

def process_untracked_folders():
    initial_cwd = os.getcwd()
    result = subprocess.run(["git", "ls-files", "--others", "--exclude-standard", "--directory"], stdout=subprocess.PIPE, text=True)
    untracked_folders = [path for path in result.stdout.splitlines() if path.endswith('/')]

    for folder in untracked_folders:
        denoify(folder)
        os.chdir(initial_cwd)

def main():
    parser = argparse.ArgumentParser(description='Process and update TypeScript test files.')
    parser.add_argument('--untracked-folders', action='store_true', help='Process all untracked child folders.')

    args = parser.parse_args()

    if args.untracked_folders:
        process_untracked_folders()
    else:
        denoify()

if __name__ == "__main__":
    main()
import os
import re
import subprocess
from termcolor import cprint

def run_deno_test():
    result = subprocess.run(['deno', 'test'], capture_output=True, text=True)
    return result.returncode, result.stdout

def check_and_update_test_file(test_file_path):
    with open(test_file_path, 'r') as file:
        content = file.read()
    
    ignored_tests_pattern = r'(\.ignore)'
    ignored_tests = re.findall(ignored_tests_pattern, content)

    if not ignored_tests:
        cprint(f'{"": ^23}', "black", "on_green")
        cprint(f'{"ALL TESTS PASSED!": ^23}', "black", "on_green")
        return False

    updated_content = re.sub(ignored_tests_pattern, '', content, count=1)

    with open(test_file_path, 'w') as file:
        file.write(updated_content)

    return True

def main():
    test_file_name = None
    for file_name in os.listdir():
        if file_name.endswith('.test.ts'):
            test_file_name = file_name
            break

    if not test_file_name:
        print("No test file found.")
        return

    iteration_count = 0
    while True:

        returncode, output = run_deno_test()
        print(output)

        iteration_count += 1
        cprint(f'{f"YOU PASSED ROUND {iteration_count}!": ^23}', "black", "on_green")
        if returncode == 0:
            if not check_and_update_test_file(test_file_name):
                break
        else:
            break

if __name__ == '__main__':
    main()

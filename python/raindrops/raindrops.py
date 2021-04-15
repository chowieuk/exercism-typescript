"""
The rules of `raindrops` are that if a given number:

- has 3 as a factor, add 'Pling' to the result.
- has 5 as a factor, add 'Plang' to the result.
- has 7 as a factor, add 'Plong' to the result.
- _does not_ have any of 3, 5, or 7 as a factor, the result should be the digits of the number.
"""

def convert(number):
    result = ""

    if number % 3 == 0: result += "Pling"
    if number % 5 == 0: result += "Plang"
    if number % 7 == 0: result += "Plong"

    if result: return result
    return str(number)

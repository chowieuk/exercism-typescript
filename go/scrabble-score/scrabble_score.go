package scrabble

import (
	"errors"
	"unicode"
)

func ParseChar(c rune) (int, error) {
	switch unicode.ToUpper(c) {
	case 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T':
		return 1, nil
	case 'D', 'G':
		return 2, nil
	case 'B', 'C', 'M', 'P':
		return 3, nil
	case 'F', 'H', 'V', 'W', 'Y':
		return 4, nil
	case 'K':
		return 5, nil
	case 'J', 'X':
		return 8, nil
	case 'Q', 'Z':
		return 10, nil
	}
	return 0, errors.New("Unrecognized Character")
}

func Score(word string) int {
	var result int
	var value int
	for _, char := range []rune(word) {
		value, _ = ParseChar(char)
		result += value
	}

	return result
}

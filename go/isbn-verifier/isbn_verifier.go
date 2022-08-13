package isbn

import (
	"strings"
	"unicode"
)

func IsValidISBN(isbn string) bool {

	var sum int

	isbn = strings.ReplaceAll(isbn, " ", "")
	isbn = strings.ReplaceAll(isbn, "-", "")

	// must be 10 characters long
	if len(isbn) != 10 {
		return false
	}

	// check digit must be numeric or 'X'
	if !(unicode.IsNumber(rune(isbn[len(isbn)-1])) || isbn[len(isbn)-1] == 'X') {
		return false
	}

	// (d₁ * 10 + d₂ * 9 + d₃ * 8 + d₄ * 7 + d₅ * 6
	// + d₆ * 5 + d₇ * 4 + d₈ * 3 + d₉ * 2 + d₁₀ * 1) mod 11 == 0

	for i, char := range isbn {
		if (i == 9) && (char == 'X') {
			sum += 10
			continue
		}

		if !(unicode.IsNumber(char)) {
			return false
		}
		sum += (int(char - '0')) * (10 - i)
	}
	return (sum%11 == 0)
}

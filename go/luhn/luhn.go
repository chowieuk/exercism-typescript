package luhn

import (
	"strings"
	"unicode"
)

func Valid(id string) bool {

	var sum int
	j := 1

	id = strings.ReplaceAll(id, " ", "")

	if len(id) <= 1 {
		return false
	}

	for i := len(id) - 1; i >= 0; i-- {
		if !unicode.IsNumber(rune(id[i])) {
			return false
		}
		digit := int(id[i] - '0')
		if j%2 == 0 {
			if (digit * 2) > 9 {
				sum += (digit * 2) - 9
			} else {
				sum += (digit * 2)
			}
			j++
		} else {
			sum += digit
			j++
		}
	}

	return sum%10 == 0
}

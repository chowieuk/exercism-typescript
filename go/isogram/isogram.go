package isogram

import "unicode"

func IsIsogram(word string) bool {

	if word == "" {
		return true
	}

	var CharCount []rune

	for _, c := range word {
		if c == '-' || c == ' ' {
			continue
		}
		for _, v := range CharCount {
			if unicode.ToLower(v) == unicode.ToLower(c) {
				return false
			}
		}
		CharCount = append(CharCount, c)
	}
	return true
}

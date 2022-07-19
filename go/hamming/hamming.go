package hamming

import "errors"

func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("Length of given strings do not match")
	}
	aChars := []rune(a)
	bChars := []rune(b)
	var total int
	for i, char := range aChars {
		if char != bChars[i] {
			total++
		}
	}
	return total, nil
}

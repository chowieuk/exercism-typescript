package lsproduct

import (
	"fmt"
	"strconv"
	"unicode"
)

func LargestSeriesProduct(digits string, span int) (int64, error) {

	if span > len(digits) {
		return 0, fmt.Errorf("length of (%s) is shorter than span (%d)", digits, span)
	}

	if span == 0 {
		println("SPAN LOW")
		return 1, nil
	}

	if span < 0 {
		println("SPAN LOW")
		return 0, fmt.Errorf("span cannot be negative")
	}

	for _, v := range digits {
		if !unicode.IsNumber(rune(v)) {
			return 0, fmt.Errorf("%s contains non numeric rune %v", digits, v)
		}
	}

	var runningMax int = 0
	var consideredMax int = 1
	var indexStart int = 0

	// An empty array of integers of size equal to our span

	intRange := make([]int, 0, span-1)

	// An empty map of integers to integers - we will populate this with
	// the digit we're considering, and its place in the sequence
	consideredDigits := map[int]int{}

	// Initially populate our map of digits with three entries
	// Such that each entry in the map has a key equal to its position
	// in the contiguous sequence
	fmt.Println("Initial map setup")
	for indexStart <= cap(intRange) {
		consideredDigits[indexStart] = 0
		fmt.Printf("i: %d, digit: %d\n", indexStart, consideredDigits[indexStart])
		indexStart++
	}

	// Here we loop over every digit in the input, and repopulate our
	// map of considered digits based on our index in the digit
	// We also calculate the product of these considered digits
	// and make it the new running max if it is larger than our running max
	fmt.Printf("String: %s, Span: %d\n", digits, span)
	for i := range digits {
		fmt.Printf("String Index: %d, Running Max: %d\n", i, runningMax)
		consideredMax = 1
		for j, digit := range consideredDigits {
			if i+j > len(digits)-1 {
				fmt.Printf("String index (%d) + Sequence index (%d) + 1 out of range of digit length: %d\n", i, j, len(digits))
				fmt.Println("Running max:", runningMax)
				return int64(runningMax), nil
			}
			fmt.Printf("String Index: %d, Sequence Index: %d, consideredDigits Len: %d, digits len: %d\n", i, j, len(consideredDigits), len(digits))
			digit, _ = strconv.Atoi(string(digits[i+j]))
			consideredMax *= digit

			fmt.Printf("String Index: %d, Sequence Index: %d, Considered digit: %d\n", i, j, digit)
			fmt.Println("Considered Max: ", consideredMax)
		}

		if consideredMax > 1 && consideredMax > runningMax {
			runningMax = consideredMax
		}
	}

	return int64(runningMax), nil
}

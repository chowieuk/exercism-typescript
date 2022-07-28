package grains

import (
	"errors"
	"math"
)

func Square(number int) (uint64, error) {
	if number < 1 || number > 64 {
		return 0, errors.New("Invalid number")
	}
	return uint64((math.Pow(2, float64(number-1)))), nil
}

func Total() uint64 {
	var result uint64 = 0
	for i := 1; i <= 64; i++ {
		squareValue, _ := Square(i)
		result += squareValue
	}
	return result
}

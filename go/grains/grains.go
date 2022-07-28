package main

import (
	"errors"
	"fmt"
	"log"
	"math"
	"os"
)

func main() {
	f, err := os.Create("squares.txt")

	if err != nil {
		log.Fatal(err)
	}

	defer f.Close()

	for i := 1; i <= 64; i++ {
		squareValue, _ := Square(i)
		_, err2 := f.WriteString(fmt.Sprintf("%v\n", squareValue))

		if err2 != nil {
			log.Fatal(err2)
		}
	}
}

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

/*

goos: windows
goarch: amd64
pkg: grains
cpu: Intel(R) Core(TM) i7-7600U CPU @ 2.80GHz
BenchmarkSquare
BenchmarkSquare-4        2954072               420.6 ns/op            48 B/op          3 allocs/op
BenchmarkTotal
BenchmarkTotal-4          444885              3360 ns/op               0 B/op          0 allocs/op
PASS
ok      grains  5.333s

*/

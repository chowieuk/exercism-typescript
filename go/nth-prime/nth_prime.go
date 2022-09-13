package prime

import (
	"errors"
)

// Nth returns the nth prime number. An error must be returned if the nth prime number can't be calculated ('n' is equal or less than zero)
func Nth(n int) (int, error) {

	primes := map[int]int{}

	switch {
	case n <= 0:
		return 0, errors.New("there is no zeroth prime")

	case n == 1:
		return 2, nil
	}

	primes[1] = 2

	for i := 2; i <= n; i++ {
		foundPrime := false
		for j := primes[i-1] + 1; !foundPrime; j++ {
			for _, prime := range primes {
				if j%prime == 0 {
					foundPrime = false
					break
				}
				foundPrime = true
			}
			if !foundPrime {
				continue
			}
			primes[i] = j
		}

	}

	return primes[n], nil
}

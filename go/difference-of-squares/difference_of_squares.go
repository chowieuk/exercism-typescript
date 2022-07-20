package diffsquares

// Returns the square of the sum of first n natural numbers
// Sum of n natural numbers is
// S=(1/2)(n)(n+1).
func SquareOfSum(n int) int {
	sum := n * (n + 1) / 2
	return sum * sum
}

// Uses the equation for the square pyramidial formula
// https://en.wikipedia.org/wiki/Square_pyramidal_number
func SumOfSquares(n int) int {
	return (n * (n + 1) * (2*n + 1)) / 6
}

func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}

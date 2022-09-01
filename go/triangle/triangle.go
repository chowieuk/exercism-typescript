// This is a "stub" file.  It's a little start on your solution.
// It's not a complete solution though; you have to write some code.

// Package triangle should have a package comment that summarizes what it's about.
// https://golang.org/doc/effective_go.html#commentary
package triangle

// Notice KindFromSides() returns this type. Pick a suitable data type.
type Kind string

const (
	// Pick values for the following identifiers used by the test program.
	NaT Kind = ""
	Equ Kind = "equilateral"
	Iso Kind = "isosceles"
	Sca Kind = "scalene"
)

// KindFromSides should have a comment documenting it.
func KindFromSides(a, b, c float64) Kind {
	var k Kind

	switch {
	case a <= 0 || b <= 0 || c <= 0:
		// length too low
		k = NaT

	case a+b < c || b+c < a || c+a < b:
		// fails triangle inequality
		k = NaT

	case (a == b) && (b == c):
		// all sides equal
		k = Equ

	case (a == b) || (b == c) || (c == a):
		// two sides equal
		k = Iso

	case (a != b) && (b != c) && (c != a):
		// all sides different
		k = Sca
	}

	return k
}

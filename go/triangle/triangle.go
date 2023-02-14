// From three lengths, determines if the given shape is a triangle
// and what kind of triangle it is
package triangle

type Kind string

const (
	NaT Kind = ""
	Equ Kind = "equilateral"
	Iso Kind = "isosceles"
	Sca Kind = "scalene"
)

// determines if the three given sides form a triangle
// and what kind of triangle do they form
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

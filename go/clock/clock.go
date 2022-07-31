package clock

import "fmt"

// norm returns nhi, nlo such that
//	hi * base + lo == nhi * base + nlo
//	0 <= nlo < base
// taken from time.go
func norm(hi, lo, baselo int) (nhi, nlo int) {
	if lo < 0 {
		n := (-lo-1)/baselo + 1
		hi -= n
		lo += n * baselo
	}
	if lo >= baselo {
		n := lo / baselo
		hi += n
		lo -= n * baselo
	}

	return hi, lo
}

// overflow nlo such that
//  0 <= nlo < base
// ensures that lo rolls over in increments of base
// adapted from above

func overflow(lo, base int) (nlo int) {
	if lo < 0 {
		n := (-lo-1)/base + 1
		lo += n * base
	}
	if lo >= base {
		n := lo / base
		lo -= n * base
	}
	return lo
}

// Define the Clock type here.

type Clock struct {
	hours   int
	minutes int
}

func New(h, m int) Clock {
	var c Clock

	h, m = norm(h, m, 60)
	h = overflow(h, 24)

	c.hours = h
	c.minutes = m
	return c
}

func (c Clock) Add(m int) Clock {
	if m+c.minutes >= 60 {
		c.hours, c.minutes = norm(c.hours, m+c.minutes, 60)
		c.hours = overflow(c.hours, 24)
	} else {
		c.minutes += m
	}
	return c
}

func (c Clock) Subtract(m int) Clock {
	if c.minutes-m < 0 {
		c.hours, c.minutes = norm(c.hours, c.minutes-m, 60)
		c.hours = overflow(c.hours, 24)
	} else {
		c.minutes -= m
	}
	return c
}

func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.hours, c.minutes)
}

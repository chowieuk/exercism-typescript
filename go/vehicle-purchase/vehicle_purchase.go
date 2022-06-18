package purchase

import (
	"fmt"
	"strings"
)

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
	if kind == "car" || kind == "truck" {
		return true
	}
	return false
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
func ChooseVehicle(option1, option2 string) string {

	cleanOption1 := strings.TrimLeft(option1, "1234567890")
	upperCleanOption1 := strings.ToUpper(cleanOption1)

	cleanOption2 := strings.TrimLeft(option2, "1234567890")
	upperCleanOption2 := strings.ToUpper(cleanOption2)

	if upperCleanOption1 < upperCleanOption2 {
		return fmt.Sprintf("%s is clearly the better choice.", option1)
	} else {
		return fmt.Sprintf("%s is clearly the better choice.", option2)
	}
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
	if age >= 10 {
		return originalPrice * 0.5
	} else if age < 3 {
		return originalPrice * 0.8
	} else {
		return originalPrice * 0.7
	}
}

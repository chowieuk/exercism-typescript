package gross

// Units stores the Gross Store unit measurements.
func Units() map[string]int {

	units := map[string]int{
		"quarter_of_a_dozen": 3,
		"half_of_a_dozen":    6,
		"dozen":              12,
		"small_gross":        120,
		"gross":              144,
		"great_gross":        1728}
	return units
}

// NewBill creates a new bill.
func NewBill() map[string]int {
	bill := make(map[string]int)
	return bill
}

// AddItem adds an item to customer bill.
func AddItem(bill, units map[string]int, item, unit string) bool {
	_, existsInUnitList := units[unit]
	if !existsInUnitList {
		return false
	}

	_, existsInBill := bill[item]
	switch existsInBill {
	case true:
		bill[item] += units[unit]
	case false:
		bill[item] = units[unit]
	}
	return true
}

// RemoveItem removes an item from customer bill.
func RemoveItem(bill, units map[string]int, item, unit string) bool {
	_, existsInBill := bill[item]
	if !existsInBill {
		return false
	}

	_, existsInUnitList := units[unit]
	if !existsInUnitList {
		return false
	}

	switch {
	case bill[item] < units[unit]:
		return false

	case bill[item] == units[unit]:
		delete(bill, item)
		return true
	}
	bill[item] -= units[unit]
	return true
}

// GetItem returns the quantity of an item that the customer has in his/her bill.
func GetItem(bill map[string]int, item string) (int, bool) {
	_, existsInBill := bill[item]
	if !existsInBill {
		return 0, false
	}
	return bill[item], true
}

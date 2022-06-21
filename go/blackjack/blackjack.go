package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	cardValue := map[string]int{
		"ace":   11,
		"eight": 8,
		"two":   2,
		"nine":  9,
		"three": 3,
		"ten":   10,
		"four":  4,
		"jack":  10,
		"five":  5,
		"queen": 10,
		"six":   6,
		"king":  10,
		"seven": 7,
		"one":   1,
	}
	return cardValue[card]
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {

	totalValue := ParseCard(card1) + ParseCard(card2)
	switch {
	case totalValue == 22:
		return "P"
	case totalValue == 21:
		if ParseCard(dealerCard) == 10 || ParseCard(dealerCard) == 11 {
			return "S"
		} else {
			return "W"
		}
	case totalValue < 21 && totalValue >= 17:
		return "S"
	case totalValue < 17 && totalValue >= 12:
		if ParseCard(dealerCard) >= 7 {
			return "H"
		} else {
			return "S"
		}

	}
	return "H"
}

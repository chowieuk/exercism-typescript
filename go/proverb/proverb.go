// Provides a function that generates simple proverbs from a list of stings
// The proverb is returned as a list of strings, an entry per line
package proverb

import "fmt"

// Proverb takes a list of words and returns a list strings which are
// lines in a proverb
func Proverb(rhyme []string) []string {
	result := []string{}
	for i := range rhyme {
		if i == len(rhyme)-1 {
			result = append(result, fmt.Sprintf("And all for the want of a %s.", rhyme[0]))
			return result
		}
		result = append(result, fmt.Sprintf("For want of a %s the %s was lost.", rhyme[i], rhyme[i+1]))
	}
	return result
}

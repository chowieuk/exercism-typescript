package anagram

import (
	"strings"
)

func Detect(subject string, candidates []string) []string {
	results := []string{}
	for _, candidate := range candidates {
		if len(candidate) != len(subject) {
			continue
		}
		if strings.EqualFold(subject, candidate) {
			continue
		}

		lowerSubject := strings.ToLower(subject)
		lowerCandidate := strings.ToLower(candidate)
		// Check each rune in the subject
		for i, subjectChar := range lowerSubject {
			// If the rune isn't in the candidate, then exit the loop
			if !strings.ContainsRune(lowerCandidate, subjectChar) {
				break
			}
			// if the number of instances of the subject char in the subject,
			// is not equal to the number of instaces of the subject char
			// TODO: avoid recasting to string?
			if strings.Count(lowerSubject, string(subjectChar)) != strings.Count(lowerCandidate, string(subjectChar)) {
				break
			}
			// We will only arrive here if every rune in the subject is containined in the candidate.
			if i+1 == len(subject) {
				results = append(results, candidate)
			}
			continue
		}
	}
	return results
}

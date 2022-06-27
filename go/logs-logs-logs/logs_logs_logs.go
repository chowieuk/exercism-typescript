package logs

// Application identifies the application emitting the given log.
// Credit to glacion
func Application(log string) string {
	// creates a map of runes and strings
	app := map[rune]string{
		'\u2757':     "recommendation",
		'\U0001f50d': "search",
		'\u2600':     "weather",
	}
	for _, char := range log {
		// initialize two variables name which is the value from the map, and ok which will be true if the name is in the map
		// returns the name if it existis
		// called the "comma ok" idiom
		if name, ok := app[char]; ok {
			return name
		}
	}
	return "default"
}

// Replace replaces all occurrences of old with new, returning the modified log
// to the caller.
func Replace(log string, oldRune, newRune rune) string {
	out := []rune(log)
	for index, char := range out {
		if char == oldRune {
			out[index] = newRune
		}
	}
	return string(out)
}

// WithinLimit determines whether or not the number of characters in log is
// within the limit.
func WithinLimit(log string, limit int) bool {
	runes := []rune(log)
	return len(runes) <= limit
}

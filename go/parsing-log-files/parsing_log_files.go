package parsinglogfiles

import (
	"fmt"
	"regexp"
)

func IsValidLine(text string) bool {
	re := regexp.MustCompile(`^\[TRC\]|^\[DBG\]|^\[INF\]|^\[WRN\]|^\[ERR\]|^\[FTL\]`)
	return re.MatchString(text)
}

func SplitLogLine(text string) []string {
	re := regexp.MustCompile(`<([=\-~\*]*)>`)
	return re.Split(text, -1)
}

func CountQuotedPasswords(lines []string) int {
	re1 := regexp.MustCompile(`"[^"]+"`)
	re2 := regexp.MustCompile(`(?i)password`)
	count := 0
	for _, line := range lines {
		if re1.MatchString(line) {
			if re2.MatchString(re1.FindString(line)) {
				count++
			}
		}
	}
	return count
}

func RemoveEndOfLineText(text string) string {
	re := regexp.MustCompile(`(end-of-line)(\d+)`)
	return re.ReplaceAllString(text, "")
}

func TagWithUserName(lines []string) []string {

	re := regexp.MustCompile(`User[[:blank:]]+(\w+)`)
	var newLines []string
	for _, line := range lines {
		if re.MatchString(line) {
			newLine := fmt.Sprintf("[USR] %s ", re.FindStringSubmatch(line)[1]) + line
			newLines = append(newLines, newLine)
			continue
		}
		newLines = append(newLines, line)
	}

	return newLines
}

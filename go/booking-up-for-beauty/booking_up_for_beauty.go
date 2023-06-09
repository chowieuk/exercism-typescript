package booking

import (
	"time"
)

// Schedule returns a time.Time from a string containing a date
func Schedule(date string) time.Time {
	t, _ := time.Parse("1/2/2006 15:04:05", date)
	return t
}

// HasPassed returns whether a date has passed
// Expected date layout October 3, 2019 20:32:0
// Reference layout: January 2, 2006 15:04:05
func HasPassed(date string) bool {
	appointmentTime, _ := time.Parse("January 2, 2006 15:04:05", date)
	return appointmentTime.Before(time.Now())
	// could have also used time.Now().After(appointmentTime)
}

// IsAfternoonAppointment returns whether a time is in the afternoon
// Expected date layout "Thursday, July 25, 2019 13:45:00"
// Reference time in our layout: "Monday, January 2, 2006 15:04:05"
func IsAfternoonAppointment(date string) bool {
	appointmentTime, _ := time.Parse("Monday, January 2, 2006 15:04:05", date)
	hour := appointmentTime.Hour()
	return hour >= 12 && hour < 18
}

// Description returns a formatted string of the appointment time
// Description(6/6/2005 10:30:00) - Layout 1/2/2006 15:04:05
// Output: "You have an appointment on Thursday, July 25, 2019, at 13:45."
// Layout: Monday, January 2, 2006 at 15:04
func Description(date string) string {
	appointment := Schedule(date)
	return appointment.Format("You have an appointment on Monday, January 2, 2006, at 15:04.")
	// could alternatively use
	// return fmt.Sprintf("You have an appointment on %s, %s.",
	//					  appointment.Weekday()
	//					  appointment.Format("January 2, 2006, at 15:04."))
}

// AnniversaryDate returns a Time with this year's anniversary
// Salon opened on September 15th in 2012.
// Output: 2020-09-15 00:00:00 +0000 UTC
func AnniversaryDate() time.Time {
	// anniversary := "September 15 in " + fmt.Sprint(time.Now().Year())
	// anniversaryTime, _ := time.Parse("January 2 in 2006", anniversary)
	// return anniversaryTime
	return time.Date(
		time.Now().Year(),
		time.September,
		15, 0, 0, 0, 0, time.UTC)
}

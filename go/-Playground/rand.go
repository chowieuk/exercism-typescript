package rand

import (
	"fmt"
	"math/rand"
	"time"
)

func pinger(c chan string) {
	for i := 0; ; i++ {
		amt := time.Duration(rand.Intn(250))
		time.Sleep(time.Millisecond * amt)
		c <- fmt.Sprint("ping ", amt)
	}
}

func ponger(c chan string) {
	for i := 0; ; i++ {
		c <- "pong"
	}
}

func printer(c chan string) {
	for {
		msg := <-c
		fmt.Println(msg)
		time.Sleep(time.Second * 1)
	}
}

func main() {
	var c chan string = make(chan string)

	go pinger(c)
	go ponger(c)
	go printer(c)

	var input string
	fmt.Scanln(&input)
}

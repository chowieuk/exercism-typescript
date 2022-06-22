package lasagna

const noodlesPerLayerGrams int = 50
const saucePerLayerLitres float64 = 0.2

// Returns the prep time based on the average prep time per layer and number of layers
func PreparationTime(layers []string, averagePrepTime int) int {
	if averagePrepTime == 0 {
		averagePrepTime = 2
	}
	return averagePrepTime * len(layers)
}

// Returns how much noodles and sauce you need for your layers
// For each noodle layer in your lasagna, you will need 50 grams of noodles. For each sauce layer in your lasagna, you will need 0.2 liters of sauce.
func Quantities(layers []string) (noodles int, sauce float64) {

	var noodleCount, sauceCount int = 0, 0

	for _, ingredient := range layers {
		switch {
		case ingredient == "noodles":
			noodleCount++
		case ingredient == "sauce":
			sauceCount++
		}
	}
	noodles = noodleCount * noodlesPerLayerGrams
	sauce = float64(sauceCount) * saucePerLayerLitres
	return
}

// Replaces the last item in my ingredient list with the secret ingredient
func AddSecretIngredient(friendList, myList []string) {
	theSecret := friendList[len(friendList)-1]
	myList[len(myList)-1] = theSecret
}

// Takes two parameters. A slice of float64 amounts needed for 2 portions.
// and the number of portions you want to cook.
// Returns a slice of float64 of the amounts needed for the desired number of portions.

func ScaleRecipe(amountsForTwo []float64, portions int) []float64 {
	scaledAmounts := make([]float64, len(amountsForTwo))

	for i, v := range amountsForTwo {
		scaledAmounts[i] = v * float64(portions) / 2
	}

	return scaledAmounts
}

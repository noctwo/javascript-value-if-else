function weatherRating() {
    let rateValue = document.querySelector(".rating-input").value;
    let outputValue = document.querySelector(".rating-output");
    if (rateValue >=8) {
        outputValue.innerHTML = "super";
    } else if (rateValue >= 6 && rateValue <= 7) {
        outputValue.innerHTML = "gut";
    } else if (rateValue >= 3 && rateValue <= 5) {
        outputValue.innerHTML = "okay"
    } else (outputValue.innerHTML = "mies")
};
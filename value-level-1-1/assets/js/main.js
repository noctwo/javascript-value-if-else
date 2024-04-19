function doubleMe() {
    let inputValue = document.querySelector(".number-input").value;
    let outputValue = inputValue * 2;
    document.querySelector(".output-field").innerHTML = outputValue;
}
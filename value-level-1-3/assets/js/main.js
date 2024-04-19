function calcDiff() {
    let ageOne = Number(document.querySelector(".age-one-input").value);
    let ageTwo = Number(document.querySelector(".age-two-input").value);
    let ageDiff = ageOne - ageTwo;
    document.querySelector(".diff-output").innerHTML = ageDiff;
};
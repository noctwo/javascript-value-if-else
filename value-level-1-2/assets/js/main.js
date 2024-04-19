function calcAge() {
    let currentYear = 2024;
    let yearOfBirth = Number(document.querySelector(".year-input").value);
    let yourAge = currentYear - yearOfBirth;
    document.querySelector(".age-output").innerHTML = yourAge;
}
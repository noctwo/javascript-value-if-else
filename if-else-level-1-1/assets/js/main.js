function ageCheck() {
    let ageInputValue = Number(document.querySelector(".age-input").value);

    if (ageInputValue >= 18) {
        document.querySelector(".check-output").innerHTML = "Volljährig";
    } else {    
        document.querySelector(".check-output").innerHTML = "Minderjährig";
    }
};
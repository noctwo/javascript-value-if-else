function checkAirQuality() {
    let qualityInput = Number(document.querySelector(".range").value);
    let concern = document.querySelector(".concern");
    let effect = document.querySelector(".effect");
    if (qualityInput <= 50) {
        concern.innherHTML = "Good Level of health";
        effect.innherHTML = "Little or no risk";
    } else if (qualityInput >50 && qualityInput <= 100) {
        concern.innherHTML = "Moderate Level of health";
        effect.innherHTML = "Acceptable quality";
    } else if (qualityInput > 100 && qualityInput <= 150) {
        concern.innherHTML = "Unhealthy for sensitive groups";
        effect.innherHTML = "Generable publics not likely affected";
    }
};
let inputEl = document.querySelector(".input");
let submitBtn = document.querySelector(".input-btn");
let lengthEl = document.querySelector(".length-p");
let volumeEl = document.querySelector(".volume-p");
let massEl = document.querySelector(".mass-p");


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204


submitBtn.addEventListener("click", function(){
    let baseValue = parseFloat(inputEl.value);
    if (isNaN(baseValue) || baseValue === 0) {
        alert("Please enter a valid number!");
    } else {
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`;
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`;
    massEl.textContent = `${baseValue} kilometers = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilometers`;
    
    }
})



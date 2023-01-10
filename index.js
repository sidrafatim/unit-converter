/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btnEl = document.getElementById("btn")
const inputEl = document.getElementById("num")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const meterToFeet = 3.281
const literToGallon = 0.219
const kgToPound = 2.204

btnEl.addEventListener("click", function() {
    const input = inputEl.value
    
    lengthEl.textContent = " "
    volumeEl.textContent = " "
    massEl.textContent = " "
    
    lengthEl.textContent += `${input} meters = ${(input * meterToFeet).toFixed(3)} feet | ${input} feet = ${(input / meterToFeet).toFixed(3)} meters`
    
    volumeEl.textContent += `${input} liters = ${(input * literToGallon).toFixed(3)} gallons | ${input} gallons = ${(input / literToGallon).toFixed(3)} liters`
    
    massEl.textContent += `${input} kilos = ${(input * kgToPound).toFixed(3)} pounds | ${input} pounds = ${(input / kgToPound).toFixed(3)} kilos`
    })
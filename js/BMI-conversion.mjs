"use strict";

// function calculateBodyMassIndex(iHeight, iWeight) {
//     let cmHeight = iHeight / 100;
//     return Math.round(((iWeight / (cmHeight * cmHeight)) + Number.EPSILON) * 100) / 100;
// }

function calculateBodyMassIndex(heightInKg, weightInKg) {
    const height = parseFloat(heightInKg);
    const weight = parseFloat(weightInKg);
    if (isNaN(height) || isNaN(weight))
        return 0;
    if (height === 0 && weight === 0) 
        return 0;
    return Math.floor(((weight / ((height / 100) * (height / 100))) + Number.EPSILON) * 100) / 100;
}

function interpretBodyMassIndex(bmi) {
    if (bmi === 0) {
        return {
            zone: null,
            text: 'BMI is Not Applicable'
        }
    } else if (bmi > 0 && bmi < 18) {
        return {
            zone: 'underweight',
            text: 'You are underweight'
        }
    } else if (bmi >= 18 && bmi <= 25) {
        return {
            zone: 'healthy',
            text: 'You are in peak condition! 🥳'
        }
    } else if (bmi > 25 && bmi <= 30) {
        return {
            zone: 'overweight',
            text: 'You are considered overweight'
        }
    } else return {
        zone: 'obese',
        text: 'You are Peter Griffin'
    };
}


export { calculateBodyMassIndex, interpretBodyMassIndex };
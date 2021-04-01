"use strict";

import { calculateBodyMassIndex, interpretBodyMassIndex } from './BMI-conversion.mjs';

window.onload = function() {

    const graph = document.getElementById("graph");
    const colhead = document.createElement('div');
    const rootcell = document.createElement('span');
    rootcell.className = `cell`;
    colhead.appendChild(rootcell);
    graph.appendChild(colhead);

    for (let kg=40; kg<=140; kg+=5) {
        const cell = document.createElement('span');
        cell.innerHTML = `${kg}kg`;
        cell.className = `cell`;
        colhead.appendChild(cell);
    }

    for (let cm=142; cm<=210; cm+=4) {
        const row = document.createElement('div');
        const rowhead = document.createElement('span')
        rowhead.className = 'cell head';
        rowhead.innerHTML = `${cm}cm`;
        row.appendChild(rowhead);
        graph.appendChild(row);

        for (let kg=40; kg<=140; kg+=5) {
            const cell = document.createElement('span');
            const bmi = calculateBodyMassIndex(cm, kg);
            cell.innerHTML = Math.round(bmi);
            cell.className = `cell ${interpretBodyMassIndex(bmi).zone}`;
            row.appendChild(cell);
        }
    }

    document.getElementById("converter").onsubmit = function(){

        const height = document.getElementById("BMI-height").value;
        const weight = document.getElementById("BMI-weight").value;

        const output = document.getElementById("BMI-output");
        const bmi = calculateBodyMassIndex(height, weight);
        output.value = bmi;

        const interpret = document.getElementById("BMI-interpret");
        interpret.innerHTML = interpretBodyMassIndex(bmi).text;

        return false;
    };
};
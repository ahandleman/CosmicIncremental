// Main Game Script

import {
    gatherRadiation,
    convertRadiation,
    buyRadiationCollector,
    buyConversionAmplifier,
    radiation,
    radiationCap,
    energy,
    radiationCollectorCost,
    conversionAmplifierCost
} from './energy.js';

const backgroundRadiationEl = document.createElement('span');
backgroundRadiationEl.id = 'background-radiation-count';
radiationCapEl.parentElement.insertBefore(backgroundRadiationEl, radiationCapEl);


// DOM Elements
const radiationCountEl = document.getElementById('radiation-count');
const radiationCapEl = document.getElementById('radiation-cap');
const energyCountEl = document.getElementById('energy-count');
const collectorCostEl = document.getElementById('collector-cost');
const amplifierCostEl = document.getElementById('amplifier-cost');

// Update UI Function
function updateUI() {
    radiationCountEl.textContent = radiation.toFixed(2);
    backgroundRadiationEl.textContent = `(${backgroundRadiation.toFixed(2)})`;
    radiationCapEl.textContent = backgroundRadiationCap.toFixed(2);
    energyCountEl.textContent = energy.toFixed(2);
    collectorCostEl.textContent = radiationCollectorCost.toFixed(2);
    amplifierCostEl.textContent = conversionAmplifierCost.toFixed(2);
}

// Event Listeners
document.getElementById('gather-radiation').addEventListener('click', () => {
    gatherRadiation();
    updateUI();
});

document.getElementById('convert-radiation').addEventListener('click', () => {
    convertRadiation();
    updateUI();
});

document.getElementById('buy-collector').addEventListener('click', () => {
    buyRadiationCollector();
    updateUI();
});

document.getElementById('buy-amplifier').addEventListener('click', () => {
    buyConversionAmplifier();
    updateUI();
});

// Initial UI setup
updateUI();

setInterval(() => {
    accumulateBackgroundRadiation();
    updateUI();
}, 1000); // Update every second


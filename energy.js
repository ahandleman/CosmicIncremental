let radiation = 0;
let radiationCap = 100;
let energy = 0;
let radiationPerClick = 1;
let energyConversionRate = 1;

let radiationCollectorCost = 10;
let conversionAmplifierCost = 20;

let backgroundRadiation = 0;
let backgroundRadiationCap = 100;
let backgroundRadiationRate = 0.1; // This is the rate at which background radiation will accumulate per second

// Function to accumulate background radiation
function accumulateBackgroundRadiation() {
    if (backgroundRadiation < backgroundRadiationCap) {
        backgroundRadiation += backgroundRadiationRate;
        if (backgroundRadiation > backgroundRadiationCap) backgroundRadiation = backgroundRadiationCap;
    }
}

// Function to collect from the background radiation
function gatherRadiation() {
    if (radiation + backgroundRadiation <= radiationCap) {
        radiation += backgroundRadiation;
        backgroundRadiation = 0;
    } else {
        let excess = radiation + backgroundRadiation - radiationCap;
        radiation = radiationCap;
        backgroundRadiation = excess;
    }
}

// Function to convert radiation to energy
function convertRadiation() {
    const convertedEnergy = radiation * energyConversionRate;
    energy += convertedEnergy;
    radiation = 0;  // Reset radiation after conversion
}

// Function to buy a radiation collector
function buyRadiationCollector() {
    if (energy >= radiationCollectorCost) {
        energy -= radiationCollectorCost;
        radiationPerClick += 1; // Increase the radiation per click
        radiationCollectorCost *= 1.5; // Increase the cost for the next collector
    }
}

// Function to buy a conversion amplifier
function buyConversionAmplifier() {
    if (energy >= conversionAmplifierCost) {
        energy -= conversionAmplifierCost;
        energyConversionRate *= 1.1; // Increase conversion rate
        conversionAmplifierCost *= 1.5; // Increase the cost for the next amplifier
    }
}

function upgradeBackgroundRadiationCap() {
    if (energy >= radiationCollectorCost) {
        energy -= radiationCollectorCost;
        backgroundRadiationCap *= 1.5; // Increase the cap
        radiationCollectorCost *= 1.5; // Increase the cost for the next upgrade
    }
}

// Function to upgrade the gathering rate
function upgradeGatheringRate() {
    if (energy >= conversionAmplifierCost) {
        energy -= conversionAmplifierCost;
        radiationPerClick *= 1.1; // Increase the gather rate
        conversionAmplifierCost *= 1.5; // Increase the cost for the next upgrade
    }
}

export {
    accumulateBackgroundRadiation,
    gatherRadiation,
    convertRadiation,
    buyRadiationCollector,
    buyConversionAmplifier,
    upgradeBackgroundRadiationCap,
    upgradeGatheringRate,
    radiation,
    radiationCap,
    energy,
    backgroundRadiation,
    backgroundRadiationCap,
    radiationCollectorCost,
    conversionAmplifierCost
};

let radiation = 0;
let radiationCap = 100;
let energy = 0;
let radiationPerClick = 1;
let energyConversionRate = 1;

let radiationCollectorCost = 10;
let conversionAmplifierCost = 20;

// Function to gather radiation
function gatherRadiation() {
    if (radiation < radiationCap) {
        radiation += radiationPerClick;
        if (radiation > radiationCap) radiation = radiationCap; // Ensure we don't exceed the cap
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

export {
    gatherRadiation,
    convertRadiation,
    buyRadiationCollector,
    buyConversionAmplifier,
    radiation,
    radiationCap,
    energy,
    radiationCollectorCost,
    conversionAmplifierCost
};
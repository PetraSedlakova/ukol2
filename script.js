
const justFood = (pocetLidi) => {
    const cenaOsoba = 500;
    const cenaSpolu = pocetLidi * cenaOsoba;
    return `Catering od Just Food pro ${pocetLidi} lidí za ${cenaSpolu} Kč`;
};

const yourMama = (pocetLidi) => {
    const cenaOsoba = 1500;
    const cenaSpolu = pocetLidi * cenaOsoba;
    return `Catering od Your Mama pro ${pocetLidi} lidí za ${cenaSpolu} Kč`;
};

const flavourHaven = (pocetLidi) => {
    const cenaOsoba = 3000;
    const cenaSpolu = pocetLidi * cenaOsoba;
    return `Catering od Flavour Haven pro ${pocetLidi} lidí za ${cenaSpolu} Kč`;
};


const createEvent = (nazovEventu, pocetLidi, funkceCatering) => {
    const cateringSprava = funkceCatering(pocetLidi);
    return `Událost ${nazovEventu} s ${cateringSprava}`;
};


console.log(justFood(100));
console.log(yourMama(100)); 
console.log(flavourHaven(100)); 


console.log(createEvent("Inaugurace prezidenta", 100, flavourHaven));
console.log(createEvent("Inaugurace prezidenta", 200, flavourHaven));
console.log(createEvent("Inaugurace prezidenta", 200, yourMama));
console.log(createEvent("Inaugurace prezidenta", 100, justFood));

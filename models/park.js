const Park = function (name, ticketPrice, collection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collection = collection;
};

Park.prototype.addDinosaurToCollection = function (dinosaur) {
    this.collection.push(dinosaur);
};

Park.prototype.removeDinosaurFromCollection = function (dinosaur) {
    index = this.collection.indexOf(dinosaur);
    if (index !== -1) {
        this.collection.splice(index, 1);
    }
};

Park.prototype.mostVisitedDinosaur = function () {
    let mostVisits = 0;
    let mostVisitedDinosaur;
    for (let dinosaur of this.collection) {
        if (dinosaur.guestsAttractedPerDay > mostVisits) {
            mostVisits = dinosaur.guestsAttractedPerDay;
            mostVisitedDinosaur = dinosaur;
        }
    }
    return mostVisitedDinosaur;
};

Park.prototype.findDinosaursBySpecies = function (searchedSpecies) {
    const species = []
    for (let dinosaur of this.collection) {
        if (dinosaur.species === searchedSpecies) {
            species.push(dinosaur);
        }
    }
    return species;
};

Park.prototype.visitorsPerDay = function () {
    let visitorsPerDay = 0;
    for (let dinosaur of this.collection) {
        visitorsPerDay += dinosaur.guestsAttractedPerDay;
    }
    return visitorsPerDay;
};

Park.prototype.visitorsPerYear = function () {
    let visitorsPerYear = this.visitorsPerDay() * 365;
    return visitorsPerYear;
};

Park.prototype.totalRevenuePerYear = function () {
    let totalRevenuePerYear = this.visitorsPerYear() * this.ticketPrice;
    return totalRevenuePerYear;
};

Park.prototype.removeDinosaursBySpecies = function (searchedSpecies) {
    for (let i = 0; i < this.collection.length; i++) {
        if (this.collection[i].species === searchedSpecies) {
            index = this.collection.indexOf(this.collection[i]);
            if (index !== -1) {
                this.collection.splice(index, 1);
            }
            i--;
        }
    }
};

Park.prototype.dietTypeNumber = function () {
    dietTypeNumber = {};
    for (let dinosaur of this.collection) {
        let dinosaurDiet = dinosaur.diet;
        if (dietTypeNumber[dinosaurDiet]) {
            dietTypeNumber[dinosaurDiet] += 1;
        } else {
            dietTypeNumber[dinosaurDiet] = 1;
        }
    }
    return dietTypeNumber;
};
  
module.exports = Park;
  
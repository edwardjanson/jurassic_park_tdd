const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    tRex = new Dinosaur('t-rex', 'carnivore', 50);
    velociraptor = new Dinosaur('velociraptor', 'carnivore', 40);
    park = new Park('Jurassic Park', 500, [tRex, velociraptor])
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 500);
  });

  describe('dinosaurs', function () {

    it('should have a collection of dinosaurs', function () {
      const actual = park.collection;
      const expected = [tRex, velociraptor];
      assert.deepStrictEqual(actual, expected);
    });

    it('should be able to add a dinosaur to its collection', function () {
      pteranodon = new Dinosaur('pteranodon', 'herbivore', 20);
      park.addDinosaurToCollection(pteranodon);
      const actual = park.collection.length;
      assert.strictEqual(actual, 3);
    });

    it('should be able to remove a dinosaur from its collection', function () {
      pteranodon = new Dinosaur('pteranodon', 'herbivore', 20);
      park.addDinosaurToCollection(pteranodon)
      park.removeDinosaurFromCollection(velociraptor)
      const actual = park.collection;
      const expected = [tRex, pteranodon];
      assert.deepStrictEqual(actual, expected);
    });

    it('should be able to find the dinosaur that attracts the most visitors', function () {
      const actual = park.mostVisitedDinosaur();
      assert.strictEqual(actual, tRex);
    });

    it('should be able to find all dinosaurs of a particular species', function () {
      tRex2 = new Dinosaur('t-rex', 'carnivore', 100);
      park.addDinosaurToCollection(tRex2)
      const actual = park.findDinosaursBySpecies('t-rex');
      const expected = [tRex, tRex2];
      assert.deepStrictEqual(actual, expected);
    });

    it('should be able to calculate the total number of visitors per day', function () {
      const actual = park.visitorsPerDay();
      assert.strictEqual(actual, 90);
    });

    it('should be able to calculate the total number of visitors per year', function () {
      const actual = park.visitorsPerYear();
      assert.strictEqual(actual, 32850);
    });

    it('should be able to calculate total revenue for one year', function () {
      const actual = park.totalRevenuePerYear();
      assert.strictEqual(actual, 16425000);
    });

    it('should be able to remove all dinosaurs of a particular species', function () {
      park.removeDinosaursBySpecies('t-rex');
      const actual = park.collection
      const expected = [velociraptor];
      assert.deepStrictEqual(actual, expected);
    });

    it('should return an object with diet types and number of dinosaurs', function () {
      pteranodon = new Dinosaur('pteranodon', 'herbivore', 20);
      park.addDinosaurToCollection(pteranodon);
      const actual = park.dietTypeNumber();
      const expected = {carnivore: 2, herbivore: 1}
      assert.deepStrictEqual(actual, expected);
    });
  });
});

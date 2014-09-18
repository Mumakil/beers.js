var BEER = "\ud83c\udf7a ";
var DOUBLE_BEER = "\ud83c\udf7b ";

Number.prototype.beers = function beers () {
  return Array(this + 1).join(BEER);
};
Number.prototype.beer = Number.prototype.beers;

Number.prototype.doubleBeers = function doubleBeers () {
  return Array(this + 1).join(DOUBLE_BEER);
};
Number.prototype.doubleBeer = Number.prototype.doubleBeers;

Number.prototype.pack = function pack () {
  function mkPack(cols, rows) {
    return Array(rows + 1).join(cols.beers() + "\n");
  }
  switch (this.valueOf()) {
  case 6:
    return mkPack(3, 2);
  case 12:
    return mkPack(6, 2);
  case 18:
    return mkPack(6, 3);
  case 20:
    return mkPack(5, 4);
  case 24:
    return mkPack(6, 4);
  default:
    throw new Error("That kind of pack does hardly exist?");
  }
};

String.prototype.compact = function compact () {
  return Math.floor(this.length / 4).doubleBeers() + Math.floor((this.length % 4) / 2).beers()
};

Math.random.beers = function randomBeers (max) {
  if (max == null) max = 10;
  if (max < 1) throw new Error("Negative beers don't exist.");
  return Math.ceil(Math.random() * max).beers();
};

Date.prototype.beerOClock = function beerOClock () {
  return true;
};

module.exports = {
  BEER: BEER,
  DOUBLE_BEER: DOUBLE_BEER
};

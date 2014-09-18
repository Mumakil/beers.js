var beers = require('./lib/beers');

console.log('Beers framework loaded!')

module.exports = {
  VERSION: "0.0.1",
  BEER: beers.BEER,
  DOUBLE_BEER: beers.DOUBLE_BEER
}

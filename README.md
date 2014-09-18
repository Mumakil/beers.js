beers.js
========

Interact with Beers right from javascript, insipired by [beers.rb](https://github.com/mutru/beers).

Usage
=====

Fire up coffeescript (or node if you're more into that) and type:

```
beers = require('beers');

# Give me one beer
1.beer()

# Give me four beers
4.beers()

# Give me three double beers
3.doubleBeers()

# Make it smaller
5.beers().compact()

# Can't decide how many?
Math.random.beers()

# Or maybe just max six?
Math.random.beers(6)

# Is it beer'o'clock?
new Date().beerOClock()
```

Licence
=======
The Unlicence

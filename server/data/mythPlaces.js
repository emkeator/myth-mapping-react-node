const africa = require('./africa'),
      oceana = require('./oceana'),
      asia = require('./asia'),
      europe = require('./europe'),
      americas = require('./americas');

module.exports = {
   mapCenter: {lat: 40.674, lng: -73.945},
   zoom: 2,
   places : [...americas.places, ...europe.places, ...asia.places, ...oceana.places, ...africa.places]
}
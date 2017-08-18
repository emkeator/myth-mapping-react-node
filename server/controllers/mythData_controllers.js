const africa = require('./../data/africa'),
      oceana = require('./../data/oceana'),
      asia = require('./../data/asia'),
      europe = require('./../data/europe'),
      americas = require('./../data/americas'),
      world = require('./../data/mythPlaces');

module.exports = {
    getPlaces: (req, res, next) => {
        let places = world;
        if(req.params.region){
            switch (req.params.region) {
                case "africa":
                    places = africa;
                    break;
                case "oceana":
                    places = oceana;
                    break;
                case "asia":
                    places = asia;
                    break;
                case "europe":
                    places = europe;
                    break;
                case "americas":
                    places = americas;
                    break;
                default:
                    break;
            }
            places.places = places.places.sort((a, b) => {
                return a.name < b.name ? -1 : 1;
            })
            res.status(200).send(places);
        } else {
            res.status(404);
        }
    }
}
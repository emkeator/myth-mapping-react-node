const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      config = require('./data/config'),
      mythDataController = require('./controllers/mythData_controllers'),
      AFRICA = '/api/africa',
      OCEANA = '/api/oceana',
      ASIA = '/api/asia',
      EUROPE = '/api/europe',
      AMERICAS = '/api/americas',
      WORLD = '/api/world',
      app = express(),
      port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: config.secret,
    saveUninitialized: false,
    resave: false
}));

app.get('/testing', (req, res) => {
    console.log('Success!');
    res.status(200).send({mythplace: "Themiscyra"});
})
app.get('/api/places/:region', mythDataController.getPlaces);


app.listen(port, () => `I'm listening on port ` + port);
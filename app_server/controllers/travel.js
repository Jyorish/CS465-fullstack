var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf-8'));

/* GET Travel View*/
const travel = (req, res) => {
    res.render('travel', { title: "Travlr Gateways", trips});
};

module.exports = {
    travel
};
let mongoose = require('mongoose');

var dbUrl = "mongodb://heroku_rkk9fh3h:9ni9okpduof7mnqmfndv242cok@ds135456.mlab.com:35456/heroku_rkk9fh3h";

const server = 'ds135456.mlab.com:35456';
const database = 'heroku_rkk9fh3h';
const user = 'heroku_rkk9fh3h';
const password = '9ni9okpduof7mnqmfndv242cok';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let schema = new mongoose.Schema({
    sensor: String,
    status: String,
    cause: String
});

module.exports = mongoose.model('Sensor', schema);
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var createError = require('http-errors');

let Sensor = require('./models/app.model');

var app = express();

// view engine setup was set inplace of use
app.use((bodyParser.json()));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname + '/public')));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
app.get('/', function(req, res, next) {
    res.render('index');
});
// app.use('/sensor', sensorRouter);
app.use('/sensor', (req, res) => {
    if (!req.body){
        return res.status(400).send('Request body is missing');
    }
    var model = new Sensor(req.body);
    model.save()
        .then(doc => {
            if (!doc){
                return res.sendStatus(500).send(doc);
            }
            res.status(201).send(doc);
        })
        .catch (err => {
            res.status(500).json(err);
            console.log(err);
        })
});

// app.use(function(req, res, next) {
//     res(createError(404));
//   });
//

module.exports = app;

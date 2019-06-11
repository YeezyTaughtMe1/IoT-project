let sensor = require('../models/app.model');
let express = require('express');
let router = express.Router();

//Entry into DB

router.post('/sensor', (req, res) => {
    if (!req.body){
        return res.status(400).send('Request body is missing');
    }

    let model = new sensor(req.body);
    model.save()
        .then(doc => {
            if (!doc || doc.length() === 0 ){
                return res.sendStatus(500).send(doc);
            }
            res.status(201).send(doc);
        })
        .catch (err => {
            res.status(500).json(err);
        })
});
module.exports = router;

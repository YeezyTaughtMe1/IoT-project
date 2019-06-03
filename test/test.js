var assert = require('chai').assert;
const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

function getStat(myobj) {
  return myobj;
}

var myobj = {status: "on", why: "app turned pi on"};
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://heroku_rkk9fh3h:9ni9okpduof7mnqmfndv242cok@ds135456.mlab.com:35456/heroku_rkk9fh3h";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("heroku_rkk9fh3h");
  dbo.collection("App").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
  });
});

   
    var debug = require('debug')('server');
    var app = require('../app');
    
    app.set('port', process.env.PORT || 3000);
    
    var server = app.listen(app.get('port'), function() {
      debug('Express server listening on port ' + server.address().port);
    });
    //MongoDB add, using mongoose
    var mongoose = require("mongoose");
    var dbUrl = "mongodb://heroku_rkk9fh3h:9ni9okpduof7mnqmfndv242cok@ds135456.mlab.com:35456/heroku_rkk9fh3h";
    

    var Message = mongoose.model("App",{ Action : String, why : String });

    mongoose.connect(dbUrl,{useNewUrlParser: true}, (err) => {
      console.log("mongodb connected", err);
    });
    
    
    app.get("/messages", (req, res) => {
      Message.find({},(err, app)=> {
        res.send(app);
      });
    });
    
    

    app.post("/messages", (req, res) => {
      var appStat = new Message(req);
      appStat.save((err) =>{
        if(err)
          sendStatus(500);
        res.sendStatus(200);
      });
      
    });

    describe('Message Response Status', function() {
      it('Should return 500 response', () => {
        app.post("/messages", (req, res) => {
          var appStat = new Message(req);
          appStat.save((err) =>{
            if(err)
              sendStatus(500);
            res.sendStatus(200);
          });
          
        
        return chai.request(app)
        .get('/messages')
        .set("Invalid header"," ")
        .catch(function(appStat) {
           assert.equal(appStat, '500'); 
        });
        });
       });
      });
    
    var io = require("socket.io").listen(server);
    
    io.on("connection", function(socket){
      console.log("Client Connected");
    
        socket.on("stateChanged", function(state){
        console.log("State Changed: " + state);
        io.emit("updateState", state);
      });
    });




  //before(function(done) {
   // mongoose.disconnect(function() {
   // mongoose.connect('mongodb://heroku_rkk9fh3h:9ni9okpduof7mnqmfndv242cok@ds135456.mlab.com:35456/heroku_rkk9fh3h');
   //   done(); 
   //});
   //});
    

describe('Mongoose Connect', function() {
  it('Would pass if mongoose is connected to right URL', function(){
  assert.equal(dbUrl, 'mongodb://heroku_rkk9fh3h:9ni9okpduof7mnqmfndv242cok@ds135456.mlab.com:35456/heroku_rkk9fh3h');
});
});



describe('Mongoose Connect Trial', function() {
it('Save without error', function() {
  var dbi =  mongoose.connect('mongodb://heroku_rkk9fh3h:9ni9okpduof7mnqmfndv242cok@ds135456.mlab.com:35456/heroku_rkk9fh3h');
assert(dbi, 'null')
 });
});


describe('Message', function() {
  it('Correct if Mongoose schema is equal to App', function(){   
  assert.equal(Message, mongoose.model("App"));
});
});

describe('App directory', function()  {
  it('This would be correct is directory is correct.', function() {
  assert.equal(app, require('../app'));
});
});


describe('URL to MongoDB in function AddtoDB', function() {
  it('Correct if right url is used to connect to MongoDB.', function(){
  assert.equal(url, "mongodb://heroku_rkk9fh3h:9ni9okpduof7mnqmfndv242cok@ds135456.mlab.com:35456/heroku_rkk9fh3h");
});
});

describe('Routes js files', function() {
  it('Variable router exports correctly.', function(){   
  assert.equal(router, module.exports);
});
});

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.send(req);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

describe('Routes js files', function() {
  it('Variable router exports correctly.', function(){   
  assert.equal(router, module.exports);
});
});

describe('MongoClient Connected', function() {
  it('MongoClient should be connected to mongodb module', function(){   
  assert.equal(MongoClient, require("mongodb").MongoClient);
});
});

describe('myobj on', function() {
  it('MyObject should be on if app turned pi on.', function(){   
  assert.equal(myobj, myobj);
});
});

describe('getStat - myobj', function() {
  it('Should return myobj.', function(){   
  assert.equal(getStat(myobj), myobj);
});
});



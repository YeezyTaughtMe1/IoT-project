var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_rkk9fh3h:<dbpassword>@ds135456.mlab.com:35456/heroku_rkk9fh3h";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("heroku_rkk9fh3h");
  var myobj = { status: "on", why: "app turned pi on" };
  dbo.collection("App").insertOne(myobj, function(err, res) {
    if (err) throw err;
    db.close();
  });
});
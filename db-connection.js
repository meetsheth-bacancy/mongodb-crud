const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test_bacancy', {useNewUrlParser : true, useUnifiedTopology : true,useFindAndModify:false} );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
 // console.log("We are now connected to MonoDB!!!");
});

const schema = new mongoose.Schema({
  name : String,  
  age : Number,
  nickname : String
});

const model = mongoose.model("",schema,"col1"); // col1 is the collection name

module.exports = model;
// author - Meet Sheth
// basic insert document operation in mongodb

const model = require('./db-connection');

// creating a document
const doc1 = new model({
    name : "First Record",
    age : 21,
    nickname : "bro"
});

// inserting that document into mongoDb

// A mongoose query can be executed in one of two ways. First, if you pass in a callback function, Mongoose will execute the query asynchronously and pass the results to the callback.
//All callbacks in Mongoose use the pattern: callback(error, result).
// Query docs - https://mongoosejs.com/docs/queries.html


doc1.save((error,doc1) => {
    if(error) return console.log(error);
    console.log("document saved");

});
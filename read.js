// author - Meet Sheth
// basic read collection operation in mongodb
const model = require('./db-connection');


// A mongoose query can be executed in one of two ways. First, if you pass in a callback function, Mongoose will execute the query asynchronously and pass the results to the callback.
//All callbacks in Mongoose use the pattern: callback(error, result).

// Query docs - https://mongoosejs.com/docs/queries.html

model.find((error,result) =>
{
    if(error) console.error(error);
    else console.log(result);
});


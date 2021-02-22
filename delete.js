// author - Meet Sheth
// basic delete operation in mongodb
const model = require('./db-connection');

// will clear the whole collection
// model.deleteMany((error,result) =>{
//     if(error) console.error(error);
//     else console.log(result);
// });

model.deleteOne({name:"Franklin"},(error,result) =>{
    if(error) console.error(error);
    else console.log(result);
});
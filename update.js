// author - Meet Sheth
// basic update operation in mongodb
 const model = require('./db-connection');



// schema needs to be same even if u want to update a record...u cant pass empty schema...it wont update
//3arg is options => option "new" is to display updates values in the output
// 3arg is options => option "upsert"" flag is to insert new record if the 1st parameter (find record) is not found
model.findOneAndUpdate({'name' : 'Franklin'},{'nickname' : 'Meett'},{new:true,upsert:true},(error,result) =>{
    if(error) console.error(error);
    else console.log(result);   
});


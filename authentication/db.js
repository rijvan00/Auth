const mongoose = require("mongoose");


module.exports = () =>{
    const connectionParams={
        useNewUrlParser:true,
        useunifiedTopology:true,
    };
    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("DB connected succesfully")
    }catch(error){
        console.log(error)
        console.log("could not connect to database");
    }
}
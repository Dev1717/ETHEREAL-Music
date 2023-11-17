const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb://localhost:27017/mydb");

connect.then(()=>{
    console.log("database is connected");
})
.catch(()=>{
    console.log("cannot connect to database");
})


 
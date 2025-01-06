const express = require('express');  //it import and stores express libraries
const app = express(); //stores express function


app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    console.log("hi");
    //res.status(500).send("Error Occured");
   // res.status(200).send({error:"error message"});
   //res.json({express:"Learning Express"});
  //
  // res.render("index", { text: "world" });
  res.send("Hello World");
});

const userRoute = require('./routes/user'); //import routes
app.use('/user',userRoute);
app.listen(3000); //port setup
//in url,  space error    
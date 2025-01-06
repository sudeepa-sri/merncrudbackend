const express = require('express'); 
let router = express.Router(); // router is a variable name
router.get("/",(req,res)=>{
    res.send("user information");
})

router.get("/newuser",(req,res)=>{
    res.send("New user added");
})

router.get("/createuser",(req,res)=>{
    res.send("user CREATED");
})
router.get('/:id',(req,res)=>
{
    console.log(req.usery);
res.send("retrive id value "+req.params.id);
}) 

router.put('/:id',(req,res)=>
    {
    res.send("update id value"+req.params.id);
    })

router.delete('/:id',(req,res)=>
    {
    res.send("delete id value"+req.params.id);
    })

const user = [{name: "raja"},{name:"rani"},{name:"sepoy"}];
router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=user[id];
    next();
})

module.exports=router; 
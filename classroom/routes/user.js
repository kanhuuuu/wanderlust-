const express = require("express");
const router = express.Router();

//index -user
router.get("/",(req,res)=>{
    res.send("GEt for users");
});
//Show -user
router.get("/:id",(req,res)=>{
    res.send("GEt for users id");
});

//post -user
router.post("/",(req,res)=>{
    res.send("POST for users");
});
//DELETE -user
router.delete("/:id",(req,res)=>{
    res.send("DELETE for users id");
});

module.exports = router;
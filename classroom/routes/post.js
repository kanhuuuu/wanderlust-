const express = require("express");
const router = express.Router();

//posts 
//index
router.get("/",(req,res)=>{
    res.send("GEt for posts");
});
//Show
router.get("/:id",(req,res)=>{
    res.send("GEt for posts id");
});

//post 
router.post("/",(req,res)=>{
    res.send("POST for posts");
});
//DELETE 
router.delete("/:id",(req,res)=>{
    res.send("DELETE for posts id");
});

module.exports = router;
import express from "express"

const app = express();

app.get('/',(req,res,next)=>{
    res.send("Hey, CICD completed now! Rahul Sharma Dev New One Two Three four")
})
app.listen("4000",()=>{
    console.log("Server start port on 4000" )
})
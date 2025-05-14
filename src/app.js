import express from "express"

const app = express();

app.get('/',(req,res,next)=>{
    res.send("hello this is CICD")
})
app.listen("4000",()=>{
    console.log("Server start port on 4000" )
})
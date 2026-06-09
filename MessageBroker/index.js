import express from "express"
import cors from "cors"
import axios from "axios"

const app = express();

app.use(express.json());

app.post("/events", (req,res)=>{
    axios.post("http://localhost:8000/events",req.body)//   snippet service
    axios.post("http://localhost:8001/events",req.body)//  comment service
    axios.post("http://localhost:8002/events",req.body)//  query service
    return res.status(200).json({})
})


const PORT = 8005
app.listen(PORT ,()=>{
    console.log(`Server is Running On PORT : ${PORT}`)
})
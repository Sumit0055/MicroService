import express from "express";
import cors from "cors"
import commentRouter from "./routes/comment.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))

app.post("/events",(req,res)=>{ 
console.log(`Recived Event : ${req.body.type}`)
})

app.use("/api/v1/snippet", commentRouter);//---------http://localhost:8001/api/v1/comment/:id/comment-----------

const PORT = 8001;

app.listen(PORT,()=>{
    console.log(`Server is running On PORT : ${PORT}`)
})
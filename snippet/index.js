import express from "express";
import cors from "cors"
import snippetRouter from "./routes/snippet.js"

const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/events",(req,res)=>{ 
console.log(`Snippet Recived Event : ${req.body.type}`)
})

app.use("/api/v1/snippet",snippetRouter)//---------http://localhost:8000/api/v1/snippet-----------

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server is running On PORT : ${PORT}`);
})
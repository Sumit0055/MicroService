import express from 'express';
import cors from 'cors';        


const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

const snippets = {}

app.get("/snippets",(req,res)=>{ 
    res.status(200).json(snippets)
 })

app.post("/events",(req,res)=>{
    const {type,data} = req.body
    if(type === "SnippetCreated"){
        const {id,title} = data
        snippets[id] = {
            id,
            title,
            comments:[]
        }

    }
    if(type === "CommentCreated"){
        const {id,content,snippetId} = data
        const snippet = snippets[snippetId]
        if(snippet){
            snippet.comments.push({id,content})
        }
    }
    res.status(200).json({})
})

const PORT = 8002
app.listen(PORT, () => {
    console.log(`Query service is running on port ${PORT}`);
})
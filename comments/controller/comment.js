import { commentsDB } from "../database/index.js";
import { randomBytes } from "crypto"
import axios from "axios";

export const createComment = async (req, res) => {
    const commentID = randomBytes(4).toString('hex')
    
    const { text } = req.body;
    
    const snippetId = req.params.id;

    const comments = commentsDB[snippetId] || [];

    //-------------Creating a Comment---------
    comments.push({ commentID, text });
    
    commentsDB[snippetId] = comments;
    
    // Best Placed to Public an Event
    await axios.post("http://localhost:8005/events",{
        type : "CommentCreated",
        data : { 
            id: commentID,
            content : text,
            snippetId
        }
    });


    res.status(201).json({
        success: true,
        comment: { commentID, text },
        message: "Comment Added Successfully"
    });
}

export const getCommentSnippetId = (req, res) => {
    const snippetId = req.params.id;
    const comments = commentsDB[snippetId] || [];
    return res.status(200).json({ comments });
}
import { commentsDB } from "../database/index.js";
import { randomBytes } from "crypto"

export const createComment = (req, res) => {
    const commetID = randomBytes(4).toString('hex')
    
    const { text } = req.body;
    
    const snippetId = req.params.id;

    const comments = commentsDB[snippetId] || [];

    //-------------Creating a Comment---------
    comments.push({ commetID, text });
    commentsDB[snippetId] = comments;
    res.status(201).json({
        success: true,
        comment: { commetID, text },
        message: "Comment Added Successfully"
    });
}

export const getCommentSnippetId = (req, res) => {
    const snippetId = req.params.id;
    const comments = commentsDB[snippetId] || [];
    return res.status(200).json({ comments });
}
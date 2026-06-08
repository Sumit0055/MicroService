import { snippets } from "../database/index.js";
import { randomBytes } from "crypto"//-----orignal data base nahi hai ish liye yah crypto use kra hai ----------

export const createSnippet = (req,res) =>{
    // console.log("Request Body : ", req.body)
    const id = randomBytes(4).toString('hex')

    const { title, code } = req.body;

    //-------------Creating a Snippet---------
    snippets[id] = {
        id , 
        title ,
        code 
    }
    return res.status(201).json({
        success: true,
        snippet:snippets[id],
        message: "Snippet Created Successfully"
    });
}

export const getSnippet = (req,res)=> {
    return res.status(200).json(snippets);
}
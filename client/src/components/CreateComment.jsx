import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CreateComment({ snippet }) {
    const [text, setText] = useState("")
    const [comments, setComments] = useState([])

    const addComment = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:8001/api/v1/snippet/${snippet.id}/comment`, { text });
            // console.log("res Add Comment", res.data)
            setComments([...comments, res.data.comment])
            setText("")
        } catch (error) {
            console.log("Add comment error:", error)
        }
    }

    // useEffect(() => {
    //     const fetchComment = async () => {
    //         try {
    //             const res = await axios.get(`http://localhost:8001/api/v1/snippet/${snippetId}/comment`);
    //             // console.log("res fetch comment", res.data)
    //             setComments(res.data.comments)
    //         } catch (error) {
    //             console.log("Fetch comment error:", error)
    //         }
    //     }
    //     fetchComment()
    // }, [])



    return (
        <>
            <div className="">
                {snippet.comments?.map((comment, index) => (
                    <li className="ms-6 text-sm mb-1" key={index}>{comment.content}</li>
                ))}
                <form onSubmit={addComment}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Enter your comment'
                        className='border-2 mt-3 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <button
                        className='w-fit bg-black text-white px-6 mt-5 py-2 rounded cursor-pointer hover:bg-gray-800 transition'>
                        Add Comment
                    </button>
                </form>
            </div>
        </>
    )
}

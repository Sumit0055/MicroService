import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateComment from './CreateComment'

export default function CreateSnippet() {
    const [title, setTitle] = useState("")
    const [code, setCode] = useState("")
    const [snippet, setSnippet] = useState({})

    const CreateSnippet = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8000/api/v1/snippet", { title, code })
            // console.log("res:", res.data)
            alert(res.data.message)
        } catch (error) {
            console.error("Error creating snippet:", error)
        }
    }

    useEffect(() => {
        const fetchSnippets = async () => {
            try {
                const res = await axios.get("http://localhost:8002/snippets")
                // console.log("Fetched snippets:", res.data)
                setSnippet(res.data)
            }
            catch (error) {
                console.error("Error fetching snippets:", error)
            }
        }
        fetchSnippets()
    }, [])
    return (
        <>
            <div className="mt-10 mx-auto p-6 bg-white rounded-lg shadow-md border-2 border-gray-300 
                w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <h2 className="text-2xl mb-4 text-center font-extrabold shadow-lime-700">Code Snippet</h2>
                <form onSubmit={CreateSnippet} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Description"
                        className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                    />
                    <button className="w-fit bg-black text-white px-6 py-2 rounded cursor-pointer hover:bg-gray-800 transition font-bold text-2xl">
                        Add
                    </button>
                </form>
                <div className="mt-2">
                    {
                        Object.values(snippet).map((item) => (
                            <div key={item.id} className="mt-8 p-4 bg-gray-100 rounded-md border-2 border-gray-300">
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-700">{item.code}</p>
                                {/* <CreateComment snippetId={item.id} /> */}
                                <CreateComment snippet={item} />
                            </div>
                        ))}
                </div>
            </div>

        </>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    // <div className="bg-gray-800 text-white p-4 ">
    //   <ul className="flex space-x-4 flex-row justify-evenly w-full">
    //     <Link to="/" className="hover:text-gray-400 font-bold">Home</Link>
    //     <Link to="/about" className="hover:text-gray-400 font-bold">About</Link>
    //     <Link to="/contact" className="hover:text-gray-400 font-bold">Contact</Link>
    //     <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-end margin:[-2px]">Logout</button>
    //   </ul>
    // </div>
    <div className="bg-gray-800 text-white p-4 w-full">
      <ul className="flex flex-col sm:flex-row sm:justify-evenly sm:space-x-4 space-y-2 sm:space-y-0 w-full">
        <Link to="/" className="hover:text-gray-400 font-bold">Home</Link>
        <Link to="/about" className="hover:text-gray-400 font-bold">About</Link>
        <Link to="/contact" className="hover:text-gray-400 font-bold">Contact</Link>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded sm:ml-auto">
          Logout
        </button>
      </ul>
    </div>

  )
}

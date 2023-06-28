import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="nav">
        <center>
        <Link to="/">Home</Link>
     <Link to="/create">create</Link>
        </center>
     
    </div>
  )
}

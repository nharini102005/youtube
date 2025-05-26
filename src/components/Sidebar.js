import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <>
  
  <div className='col-md-2 Sidebar menu '>

  <ul>
    <li><i class="fa fa-music"></i>Home</li>
    <li> <Link to="register">Register</Link></li>
    <li><Link to="/List">List</Link></li>
  </ul>
  </div>
  </>
  )

}

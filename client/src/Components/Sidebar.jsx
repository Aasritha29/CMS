import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaCubesStacked,
    FaUser,
    FaAddressCard,
    FaRegAddressCard,
    FaPowerOff,
} from 'react-icons/fa6'
import '../assets/css/sidebar.css'
import { useState } from 'react'

const Sidebar = () => {
    const [activeLink,setActiveLink]=useState(1)
  return (
    <div className="sidebar">
        <div className="sidebar-item">
           <FaCubesStacked className='top-icon'/>
        </div>
        <div className={`sidebar-item ${activeLink===0?"active":""}`} 
            onClick={()=>setActiveLink(0)}>
            <Link to="/profile" className="sidebar-link">
              <FaUser className="icon"/> Profile
            </Link>
        </div>
        <div className={`sidebar-item ${activeLink===1?"active":""}`}
        onClick={()=>setActiveLink(1)}>
           <Link to="/dashboard"className="sidebar-link">
           <FaAddressCard className="icon"/>  Contacts
           </Link>
       </div>

        <div className={`sidebar-item ${activeLink===2?"active":""}`}
        onClick={()=>setActiveLink(2)}>
        <Link to="/dashboard/add-contact" className="sidebar-link">
        <FaRegAddressCard className="icon"/>  Add Contact
           </Link>
        </div>

        <div className={`sidebar-item ${activeLink===3?"active":""}`}
        onClick={()=>setActiveLink(3)}>
        <Link to="/dashboard/merge-contacts" className="sidebar-link">
        <FaRegAddressCard className="icon"/>  Merge Contacts
           </Link>
        </div>


        <div className={`sidebar-item ${activeLink===4?"active":""}`}
        onClick={()=>setActiveLink(4)}>
        <Link to="/logout" className="sidebar-link">
        <FaPowerOff className="icon"/>  Exit
           </Link>
        </div>


        
    </div>
  )
}

export default Sidebar

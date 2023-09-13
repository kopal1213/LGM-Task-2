import React from 'react'
import './navbar.css';
// import { Link } from 'react-router-dom';

export default function Navbar ({toggle}) {

  
  return (
    <>
    
    <div className='navbar'>
        <p className="heading">
            Code Master
            <button className="getUser" onClick={toggle} >
           Get Users 
        </button>
        </p>            
    </div>
    </>
  )
}

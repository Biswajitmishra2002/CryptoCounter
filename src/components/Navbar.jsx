import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <Link to='/'>
       
        <div className="navbar">
            <FaCoins className='icon'/>
            
            <h1>Crypto<span className='purple'>Counter</span></h1>
            
            
        </div>
        <span className="coin-search">
            <form className='c' >
              <input type="text" placeholder='search-here' />
            </form>
            </span>
    </Link>
  )
}

export default Navbar
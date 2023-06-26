import React from 'react'
import './Navbar.css'
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  return (
    <div className=".nave">
      <div className="nav">
        <div className="logo">
          Nft.<span className='span'>3D</span>
        </div>
        <div className="input">
          <AiOutlineSearch />
          <input type="text" className="texts" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Navbar
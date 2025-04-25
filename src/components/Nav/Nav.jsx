import React from 'react'
import lupa from "../../assets/lupa.svg"

import './index.scss'; 
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Nav'>
        <Link to={"/"}><h2>
        ManwhasBrasil
        </h2></Link>

        <div className='Nav_pesquisa'>
        <img src={lupa} alt="search logo" className="nav__search-Lupa" />
        <input type="text" placeholder="Search" />
        </div>
    </div>
  )
}

export default Nav
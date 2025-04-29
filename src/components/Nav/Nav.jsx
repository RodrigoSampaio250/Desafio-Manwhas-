import React from 'react'
import { useRef } from 'react'
import lupa from "../../assets/lupa.svg"

import './index.scss'; 
import { Link } from 'react-router-dom';

const Nav = ({ onSearchChange }) => {

    // const handleChange = (e) => {
    //     setSearchTerm(e.target.value);
    //   };  //[Você mexe direto no que é seu.]

    const handleInputChange = (e) => {
        onSearchChange(e.target.value); // toda vez que digitar, chama a função[Você pede para alguém que tem acesso fazer isso] 
    };

    const inputRef = useRef(null);

    return (
    <div className='Nav'>
        <Link to={"/"}><h2>
        ManwhasBrasil
        </h2></Link>

        <div className='Nav_pesquisa'>
        {/* <img src={lupa} alt="search logo" className="nav__search-Lupa" onClick={() => inputRef.current?.focus()}/> */}

        {/* <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)}/>
        </div> */}

            <input ref={inputRef} type="text" placeholder="Search" onChange={handleInputChange}/>
            <div className='Nav_pesquisa_busca' onClick={() => inputRef.current?.focus()}>
                <h3>Buscar</h3>
            </div>
        </div>
    </div>
  )
}

export default Nav
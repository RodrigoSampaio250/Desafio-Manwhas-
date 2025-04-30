import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from "../../services/api";
import Nav from '../../components/Nav/Nav';
import ManwhaCard from '../../components/ManwhaCard/ManwhaCard';

const Home = () => {
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    return (
        <div className='Home'>
        <Nav onSearchChange={handleSearchChange} />

        <div className='Home_titulo'>
        <FontAwesomeIcon icon="fa-solid fa-book" /> <h3>Manwha</h3>
        </div>

        <ManwhaCard searchTerm={searchTerm} />
        </div>
    )
}

export default Home

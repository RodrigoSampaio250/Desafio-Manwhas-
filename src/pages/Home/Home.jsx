import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

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
        <ManwhaCard searchTerm={searchTerm} />
        </div>
    )
}

export default Home

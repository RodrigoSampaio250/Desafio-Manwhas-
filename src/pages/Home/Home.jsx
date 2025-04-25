import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import api from "../../services/api";
import Nav from '../../components/Nav/Nav';
import ManwhaCard from '../../components/ManwhaCard/ManwhaCard';

const Home = () => {
  return (
    <div>
        <Nav/>
        <ManwhaCard/>
    </div>
  )
}

export default Home

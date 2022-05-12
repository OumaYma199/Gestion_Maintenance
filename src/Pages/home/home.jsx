import React from 'react';
import Template from '../../Component/Template/template';
import './home.css'
import Chart from '../../Component/chart/chart';
const Home = () => {
    return (
        <div className='home '>
            <Template /> 
            <Chart />
        </div>
    );
}

export default Home;

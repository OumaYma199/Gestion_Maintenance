import React from 'react';

import { LineChart, Line, XAxis,YAxis,Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './chart.css'
const Chart = () => {
        const data = [
            {
              name: 'Janv',
              "Puissance": 4000,
              
            },
            {
              name: 'Feb',
              "Puissance": 3000,
              
            },
            {
              name: 'Mar',
              "Puissance": 2000,
              
            },
            {
              name: 'Apr',
              "Puissance": 2780,
        
            },
            {
              name: 'May ',
              "Puissance": 1890,
           
            },
            {
              name: 'Jun',
              "Puissance": 2390,
              
            },
            {
              name: 'Jul',
              "Puissance": 3490,
              
            },
            {
                name: 'Agu',
                "Puissance": 3490,
               
              },
            {
                name: 'Sep',
                "Puissance": 3190,
              
            },
            {
                name: 'Oct',
                "Puissance": 3990,
             
              },
            {
                name: 'Nov',
                "Puissance": 340,
                
            },
            {
                name: 'Dec',
                "Puissance": 90,
                
            },
          ];
          return (

        <div className='chart'>
            <h3 className="chartTitle">consomation Eléctrique</h3>
            <ResponsiveContainer width="90%" aspect={4 / 1}>
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
         
                <XAxis dataKey="name" stroke="rgb(13, 0, 37)" />
                <YAxis />
               <Tooltip /> 
                <Line type="monotone" dataKey="Puissance" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
}

export default Chart;


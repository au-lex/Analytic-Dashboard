import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import {Chart } from 'chart.js/auto'
import './App.css'
import Header from './Component/Header'
import Chart1 from './Component/Chart1'

Chart.register( CategoryScale )

function App() {
  
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Users Gained',
        data: [8000, 19000, 6000, 20000, 7000, 46000, 40000, 28000, 40000, 4000, 30000, 20000],
        backgroundColor: [
          'rgba(75,192,192,1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 103, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(201, 203, 207, 1)',
          'rgba(255, 20, 100, 1)',
          'rgba(255, 180, 0, 1)',
          'rgba(100, 200, 255, 1)',
          'rgba(100, 100, 255, 1)'
        ],
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
      }
    ]
  });

  return (
    <>
    <Header chartData={chartData} />

{/* 
    <Chart1 chartData={chartData} /> */}
    </>
  )
}

export default App







import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Chart } from 'chart.js/auto';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Component/Header';

Chart.register(CategoryScale);

function App() {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Users Gained',
        data: [8000, 19000, 6000, 20000, 7000, 48000, 33000, 28000, 30000, 4000, 30000, 20000],
        backgroundColor: [
          'rgba(144,238,144,0.7)', 
          'rgba(144,238,144,0.5)',
          'rgba(144,238,144,0.3)',
          'rgba(144,238,144,0.7)',
          'rgba(144,238,144,0.5)',
          'rgba(144,238,144,0.3)',
          'rgba(144,238,144,0.7)',
          'rgba(144,238,144,0.5)',
          'rgba(144,238,144,0.3)',
          'rgba(144,238,144,0.7)',
          'rgba(144,238,144,0.5)',
          'rgba(144,238,144,0.3)',
        ],
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
      },
    ],
  });


    
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []); 

  useEffect(() => {
   
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);


  const gradient = document.createElement('canvas').getContext('2d');
  const gradientFill = gradient.createLinearGradient(0, 0, 0, 400);
  gradientFill.addColorStop(0, 'rgba(144,238,144,0.7)');
  gradientFill.addColorStop(1, 'rgba(144,238,144,0)');
  chartData.datasets[0].backgroundColor = gradientFill;

  return (
    <>
      {loading ? (
       
        <div className="loader justify-center flex h-[100vh] items-center">


<div class="dot-spinner">
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
</div>
        </div>
      ) : (
       
        <div className=''>
          <Header chartData={chartData} />
        </div>
      )}
    </>
  );
}

export default App;


import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container h-[40rem] w-full">
     
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
             
            },
            legend: {
              display: false,
            }
          }
        }}
      />
    </div>
  );
}

export default BarChart;
// File: PieChart.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.label,
        backgroundColor: data.backgroundColor,
        data: data.values,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: data.title,
        font: { size: 16, family: 'Helvetica', weight: 'bold' },
        padding: { top: 10, bottom: 10 },
      },
      subtitle: {
        display: true,
        text: data.subtitle,
        font: { size: 12, family: 'Helvetica', weight: 'bold' },
        padding: { top: 10, bottom: 10 },
      },
    },
  };

  return (
    <div className="pie-chart">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;

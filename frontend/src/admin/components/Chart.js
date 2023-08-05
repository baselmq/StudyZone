
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import 'chart.js/auto' to include all modules automatically

const ChartComponent = () => {
  // Reference to the chart canvas element
  const chartRef = React.createRef();

  // Sample data for demonstration
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'users',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  // Configuration options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    // Create the chart when the component mounts
    const myChart = new Chart(chartRef.current, {
      type: 'bar', // Change this to 'line', 'pie', 'doughnut', etc., to use a different chart type
      data: data,
      options: options,
    });

    // Clean up the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;

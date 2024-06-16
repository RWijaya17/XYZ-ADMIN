// File: DonutChart.jsx
import React, { useRef, useEffect, useState } from 'react';
import './DonutChart.scss';

const DonutChart = ({ percentage }) => {
  const [radius, setRadius] = useState(0);
  const strokeWidth = 10;

  // Reference to the SVG container
  const svgRef = useRef(null);

  useEffect(() => {
    // Calculate the radius based on the size of the SVG container
    const svgElement = svgRef.current;
    if (svgElement) {
      const width = svgElement.clientWidth;
      const height = svgElement.clientHeight;
      const smallerDimension = Math.min(width, height);
      const newRadius = (smallerDimension - strokeWidth) / 2;
      setRadius(newRadius);
    }
  }, [percentage]);

  const circumference = 2 * Math.PI * radius;
  const progress = percentage / 100;
  const dashoffset = circumference * (1 - progress);

  return (
    <svg
      ref={svgRef}
      className="donut-chart"
      width="50%"
      height="50%"
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      {/* Background circle */}
      <circle
        className="donut-circle-background"
        r={radius}
        cx={radius}
        cy={radius}
        strokeWidth={strokeWidth}
      />

      {/* Animated progress circle */}
      <circle
        className="donut-circle-progress"
        r={radius}
        cx={radius}
        cy={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashoffset}
        transform={`rotate(-90 ${radius} ${radius})`}
      />

      {/* Percentage text */}
      <text className="donut-text" x={radius} y={radius + 6} textAnchor="middle">
        {percentage}%
      </text>
    </svg>
  );
};

export default DonutChart;

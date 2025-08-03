import React from "react";

const ProgressCircle = ({ solved, total, percentage = 100 }) => {
  const circumference = 251.2;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <div className="relative w-32 h-32 mx-auto mb-4">
      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="rgb(55, 65, 81)"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="rgb(34, 197, 94)"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">
          {solved}
          <span className="text-lg text-gray-400">/{total}</span>
        </span>
        <span className="text-sm text-gray-400">Solved</span>
      </div>
    </div>
  );
};

export default ProgressCircle;

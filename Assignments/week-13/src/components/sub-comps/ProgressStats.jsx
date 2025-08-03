import React from "react";

// Progress Stats Component
const ProgressStats = ({ stats }) => (
  <div className="space-y-2">
    <div className="flex justify-between">
      <span className="text-cyan-400">Easy</span>
      <span className="text-cyan-400">
        {stats.easy.solved}/{stats.easy.total}
      </span>
    </div>
    <div className="flex justify-between">
      <span className="text-yellow-400">Med.</span>
      <span className="text-yellow-400">
        {stats.medium.solved}/{stats.medium.total}
      </span>
    </div>
    <div className="flex justify-between">
      <span className="text-red-400">Hard</span>
      <span className="text-red-400">
        {stats.hard.solved}/{stats.hard.total}
      </span>
    </div>
  </div>
);

export default ProgressStats;

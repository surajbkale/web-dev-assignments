import React from "react";

import ProgressCircle from "../sub-comps/ProgressCircle";
import ProgressStats from "../sub-comps/ProgressStats";
import { RotateCcw } from "lucide-react";

// Progress Section Component
const ProgressSection = ({ stats }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Progress</h3>
      <button className="text-gray-400 hover:text-white">
        <RotateCcw className="w-5 h-5" />
      </button>
    </div>

    <ProgressCircle solved={stats.solved} total={stats.total} />

    <div className="text-center text-sm text-gray-400 mb-4">0 Attempting</div>

    <ProgressStats stats={stats} />
  </div>
);

export default ProgressSection;

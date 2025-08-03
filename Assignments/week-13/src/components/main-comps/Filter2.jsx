import React from "react";
import { RotateCcw, Filter } from "lucide-react";

const Filter2 = ({ filters, onFilterChange, onReset }) => {
  const difficultyColors = {
    Easy: "text-cyan-400",
    Medium: "text-yellow-400",
    Hard: "text-red-400",
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6">
      <div className="flex items-center justify-between mb-4">
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
        {filters.difficulty.includes("Easy") && (
          <div className="bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm">
            Easy
            <button
              onClick={() => onFilterChange("difficulty", "Easy")}
              className="ml-2 text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Status</h4>
          <div className="flex space-x-4">
            {["Todo", "Solved", "Attempted"].map((status) => (
              <label key={status} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded bg-gray-700 border-gray-600"
                  checked={filters.status.includes(status)}
                  onChange={() => onFilterChange("status", status)}
                />
                <span className="text-sm">{status}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Difficulty</h4>
          <div className="flex space-x-4">
            {["Easy", "Medium", "Hard"].map((difficulty) => (
              <label key={difficulty} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded bg-gray-700 border-gray-600"
                  checked={filters.difficulty.includes(difficulty)}
                  onChange={() => onFilterChange("difficulty", difficulty)}
                />
                <span className={`text-sm ${difficultyColors[difficulty]}`}>
                  {difficulty}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded bg-gray-700 border-gray-600"
              checked={filters.showTags}
              onChange={() => onFilterChange("showTags")}
            />
            <span className="text-sm">Show tags</span>
          </label>
        </div>

        <button
          onClick={onReset}
          className="text-gray-400 hover:text-white text-sm flex items-center space-x-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default Filter2;

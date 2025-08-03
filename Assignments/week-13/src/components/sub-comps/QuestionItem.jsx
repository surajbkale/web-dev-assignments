import React from "react";
import { Check } from "lucide-react";

// Question Item Component
const QuestionItem = ({ question }) => {
  const difficultyColors = {
    Easy: "text-cyan-400",
    Medium: "text-yellow-400",
    Hard: "text-red-400",
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between hover:bg-gray-750 transition-colors cursor-pointer">
      <div className="flex items-center space-x-3">
        {question.solved && <Check className="w-5 h-5 text-green-400" />}
        <span className="text-white">
          {question.id}. {question.title}
        </span>
      </div>
      <span className={`text-sm ${difficultyColors[question.difficulty]}`}>
        {question.difficulty}
      </span>
    </div>
  );
};

export default QuestionItem;

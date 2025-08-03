import React from "react";
import StarIcon from "../sub-comps/StarIcon";
import { Play, Lock, Settings } from "lucide-react";
// Header Component
const Header = () => (
  <div className="mb-8">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
        <StarIcon className="w-10 h-10 text-orange-500" />
      </div>
      <div>
        <h1 className="text-3xl font-bold">Favorite</h1>
        <div className="flex items-center space-x-2 text-gray-400">
          <span>Sumana</span>
          <span>•</span>
          <span>19 questions</span>
          <span>•</span>
          <Lock className="w-4 h-4" />
          <span>Private</span>
        </div>
      </div>
    </div>

    <div className="flex space-x-4">
      <button className="bg-white text-black px-6 py-2 rounded-full font-medium flex items-center space-x-2 hover:bg-gray-100 transition-colors">
        <Play className="w-4 h-4" fill="currentColor" />
        <span>Practice</span>
      </button>
      <button className="text-gray-400 hover:text-white p-2 transition-colors">
        <Settings className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default Header;

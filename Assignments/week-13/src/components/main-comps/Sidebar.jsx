import React from "react";
import { X, Lock } from "lucide-react";
import StarIcon from "../sub-comps/StarIcon";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        w-64 bg-gray-800 p-4 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 fixed md:relative z-20 h-full
      `}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">My Lists</h2>
          <p className="text-sm text-gray-400 mb-4">Created by me</p>

          <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <StarIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium">Favorite</span>
            <Lock className="w-4 h-4 text-gray-400 ml-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

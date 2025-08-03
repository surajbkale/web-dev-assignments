import React, { useState } from "react";
import { Menu } from "lucide-react";
import Filter2 from "./components/main-comps/Filter2";
import Header from "./components/main-comps/Header";
import ProgressSection from "./components/main-comps/ProgressSection";
import QuestionsList from "./components/main-comps/QuestionsList";
import Sidebar from "./components/main-comps/Sidebar";
import { progressStats } from "./data/progressStats";
import { questionsData } from "./data/questionsData";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: [],
    difficulty: ["Easy"],
    showTags: false,
  });

  const handleFilterChange = (type, value) => {
    if (type === "showTags") {
      setFilters((prev) => ({ ...prev, showTags: !prev.showTags }));
      return;
    }

    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      status: [],
      difficulty: [],
      showTags: false,
    });
  };

  const filteredQuestions = questionsData.filter((question) => {
    if (
      filters.difficulty.length > 0 &&
      !filters.difficulty.includes(question.difficulty)
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="flex h-screen">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden mb-4 p-2 text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Header />

          {/* Progress Section and Filter */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Progress Section */}
            <div className="lg:w-1/3">
              <ProgressSection stats={progressStats} />
            </div>

            {/* Filter and Questions */}
            <div className="lg:w-2/3">
              <Filter2
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
              <QuestionsList questions={filteredQuestions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

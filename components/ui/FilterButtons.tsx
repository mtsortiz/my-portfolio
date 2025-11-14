import React from 'react';

interface FilterButtonsProps {
  technologies: string[];
  activeFilters: string[];
  onToggleFilter: (technology: string) => void;
  onClearFilters: () => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  technologies,
  activeFilters,
  onToggleFilter,
  onClearFilters
}) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      <button
        onClick={onClearFilters}
        className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
          activeFilters.length === 0
            ? 'dark:bg-blue-600 light:bg-blue-500 text-white shadow-lg transform scale-105'
            : 'dark:bg-white/10 light:bg-gray-200 dark:text-white light:text-gray-700 hover:dark:bg-white/20 hover:light:bg-gray-300'
        }`}
      >
        All
      </button>
      
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => onToggleFilter(tech)}
          className={`px-4 py-2 rounded-full text-sm transition-all duration-300 filter-button ${
            activeFilters.includes(tech)
              ? 'dark:bg-blue-600 light:bg-blue-500 text-white shadow-lg transform scale-105 filter-active'
              : 'dark:bg-white/10 light:bg-gray-200 dark:text-white light:text-gray-700 hover:dark:bg-white/20 hover:light:bg-gray-300'
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
'use client';

import { Filter } from 'lucide-react';

interface JobFilterProps {
  jobTypes: string[];
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;
}

export default function JobFilter({ jobTypes, selectedTypes, onTypeChange }: JobFilterProps) {
  const handleTypeToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter(t => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-3">
        <Filter className="w-4 h-4 text-gray-500" />
        <h3 className="font-semibold text-gray-900 dark:text-white">Job Type</h3>
      </div>
      <div className="space-y-2">
        {jobTypes.map((type) => (
          <label key={type} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeToggle(type)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
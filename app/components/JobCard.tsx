'use client';

import { MapPin, Clock, DollarSign, Wifi } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  onClick: (job: Job) => void;
}

export default function JobCard({ job, onClick }: JobCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <div
      onClick={() => onClick(job)}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer transition-all hover:scale-[1.02] group"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 font-medium">{job.company}</p>
        </div>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
          {job.type}
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2" />
          {job.location}
          {job.remote && (
            <>
              <Wifi className="w-4 h-4 ml-2 mr-1" />
              Remote
            </>
          )}
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <DollarSign className="w-4 h-4 mr-2" />
          {job.salary}
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4 mr-2" />
          {formatDate(job.postedDate)}
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
        {job.description}
      </p>
    </div>
  );
}
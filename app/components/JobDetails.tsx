'use client';

import { X, MapPin, Clock, DollarSign, Wifi, CheckCircle, Star } from 'lucide-react';
import { Job } from '../types';

interface JobDetailsProps {
  job: Job | null;
  onClose: () => void;
}

export default function JobDetails({ job, onClose }: JobDetailsProps) {
  if (!job) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{job.company}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full">
              {job.type}
            </span>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              {job.location}
              {job.remote && (
                <>
                  <Wifi className="w-4 h-4 ml-2 mr-1" />
                  Remote Available
                </>
              )}
            </div>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <DollarSign className="w-4 h-4 mr-2" />
              {job.salary}
            </div>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              Posted {formatDate(job.postedDate)}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Job Description</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
              Requirements
            </h3>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Benefits
            </h3>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Apply Now
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Save Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
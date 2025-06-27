'use client';

import { useState, useEffect, useMemo } from 'react';
import { Briefcase, Users } from 'lucide-react';
import JobCard from './components/JobCard';
import JobDetails from './components/JobDetails';
import JobFilter from './components/JobFilter';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import LoadingSpinner from './components/LoadingSpinner';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Job, FilterState } from './types';
import jobsData from './data/jobs.json';

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useLocalStorage<FilterState>('jobFilters', {
    jobTypes: [],
    searchQuery: ''
  });

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setJobs(jobsData as Job[]);
      setLoading(false);
    }, 1000);
  }, []);

  const jobTypes = useMemo(() => {
    const types = jobs.map(job => job.type);
    return Array.from(new Set(types));
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesType = filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type);
      const matchesSearch = !filters.searchQuery || 
        job.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      return matchesType && matchesSearch;
    });
  }, [jobs, filters]);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">JobBoard</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Find your dream job today</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Amazing Opportunities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Connect with top companies and find your perfect role
          </p>
          
          <div className="max-w-2xl mx-auto">
            <SearchBar
              searchQuery={filters.searchQuery}
              onSearchChange={(query) => updateFilters({ searchQuery: query })}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{jobs.length}</p>
                <p className="text-gray-600 dark:text-gray-400">Total Jobs</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{new Set(jobs.map(j => j.company)).size}</p>
                <p className="text-gray-600 dark:text-gray-400">Companies</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{jobs.filter(j => j.remote).length}</p>
                <p className="text-gray-600 dark:text-gray-400">Remote Jobs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <JobFilter
              jobTypes={jobTypes}
              selectedTypes={filters.jobTypes}
              onTypeChange={(types) => updateFilters({ jobTypes: types })}
            />
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
              </h3>
            </div>

            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No jobs found</h3>
                <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onClick={setSelectedJob}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      <JobDetails job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
}
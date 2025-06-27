export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  remote: boolean;
}

export interface FilterState {
  jobTypes: string[];
  searchQuery: string;
}
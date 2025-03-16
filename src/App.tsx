import React from 'react';
import { Search, Briefcase, Building2, MapPin, Clock, ChevronRight } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Netlife Code",
    location: "Oslo, Norway",
    type: "Full-time",
    posted: "2 days ago",
    description: "Join our team of passionate developers building next-generation web applications."
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Netlife Code",
    location: "Bergen, Norway",
    type: "Full-time",
    posted: "1 week ago",
    description: "Create beautiful and intuitive user experiences for our clients."
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Netlife Code",
    location: "Oslo, Norway",
    type: "Full-time",
    posted: "3 days ago",
    description: "Build robust and scalable backend systems using modern technologies."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Netlife Code Careers</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Companies</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office"
          />
          <div className="absolute inset-0 bg-blue-600 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Dream Job at Netlife Code
          </h2>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Join our team of passionate developers, designers, and digital creators building the future of web technology.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Job Openings</h3>
        <div className="space-y-6">
          {jobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{job.title}</h4>
                  <div className="mt-2 flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center">
                      <Building2 className="h-4 w-4 mr-1" />
                      {job.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600">{job.description}</p>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-700">
                  View Details
                  <ChevronRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
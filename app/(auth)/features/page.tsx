"use client"; 
import { useState } from 'react';
import FeatureList from '@/components/feature-list';

const categories = ['General', 'Utility', 'Fun', 'Economy', 'Games', 'Social'];

export default function FeaturesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('General');
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="min-h-screen flex justify-center items-center mx-auto max-w-6xl px-4 sm:px-6">
      <section className="container-lg py-12 md:py-20"
      data-aos="fade-up"
      >
        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-6xl"
        >
          Features
        </h1>
        
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-full">
            <input
              type="text"
              placeholder="Search Commands"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="absolute top-0 left-0 h-full flex items-center pl-3">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn-sm py-2 px-4 ${activeTab === category ? 'bg-indigo-500 text-white' : 'bg-gray-800 text-gray-300'}`}
              onClick={() => {
                setActiveTab(category);
                setCurrentPage(1);
              }}
            >
              {category}
            </button>
          ))}
        </div>

          <FeatureList
          searchQuery={searchQuery}
          activeTab={activeTab}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
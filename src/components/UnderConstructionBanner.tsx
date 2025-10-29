import React from 'react';

const UnderConstructionBanner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Construction Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Under Construction
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-6">
          We're working hard to bring you something amazing!
        </p>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          Hareesh Devulapalli's portfolio is currently being updated with new features and improvements. 
          Please check back soon!
        </p>

        {/* Contact Info */}
        <div className="space-y-3">
          <p className="text-sm text-gray-500">In the meantime, you can reach me at:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:hareeshdevulapalli777@gmail.com"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/hareesh-devulapalli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hareeshdevulapalli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Progress</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: '85%' }}
            ></div>
          </div>
        </div>

        {/* Estimated Completion */}
        <p className="text-xs text-gray-400 mt-4">
          Estimated completion: Coming Soon
        </p>
      </div>
    </div>
  );
};

export default UnderConstructionBanner;

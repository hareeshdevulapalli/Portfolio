import React from 'react';

const UnderConstructionBanner = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        {/* Construction Icon */}
        <div className="mb-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
            <svg
              className="h-10 w-10 text-yellow-600"
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
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Under Construction
        </h1>

        {/* Subtitle */}
        <p className="mb-6 text-lg text-gray-600">
          We're working hard to bring you something amazing!
        </p>

        {/* Description */}
        <p className="mb-8 text-gray-500">
          Hareesh Devulapalli's portfolio is currently being updated with new
          features and improvements. Please check back soon!
        </p>

        {/* Contact Info */}
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            In the meantime, you can reach me at:
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:hareeshdevulapalli777@gmail.com"
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/hareesh-devulapalli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hareeshdevulapalli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="mb-2 flex justify-between text-sm text-gray-500">
            <span>Progress</span>
            <span>85%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-1000 ease-out"
              style={{ width: '85%' }}
            ></div>
          </div>
        </div>

        {/* Estimated Completion */}
        <p className="mt-4 text-xs text-gray-400">
          Estimated completion: Coming Soon
        </p>
      </div>
    </div>
  );
};

export default UnderConstructionBanner;

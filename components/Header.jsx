import React from 'react';

const Header = ({ classLevel, chapterNumber, chapterTitle }) => {
  return (
    <header className="flex justify-between items-center px-6 py-5 relative z-20">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-0.5">
          {classLevel}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900 tracking-tight">
            Chapter
          </span>
          <span className="text-3xl font-light text-gray-600">
            {chapterNumber}
          </span>
        </div>
        <h1 className="text-lg font-medium text-gray-800 mt-1">
          {chapterTitle}
        </h1>
      </div>

      <div className="relative group cursor-pointer">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
        <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 overflow-hidden">
          <img
            src="https://play-lh.googleusercontent.com/-pA6Jj6I5OPL3jS-1JD8z66LqMoSw0nZIa4M_ssrwFlIYl47yDhqlkauTSG0RqGJkhI=w240-h480-rw"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
// src/views/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

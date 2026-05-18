import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-7xl md:text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold">
              <Home className="w-4 h-4 inline mr-2" />
              Go Home
            </button>
          </Link>
          <button onClick={() => window.history.back()} className="px-6 py-3 glass rounded-xl font-semibold">
            <ArrowLeft className="w-4 h-4 inline mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
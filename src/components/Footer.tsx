import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* LinkedIn Link */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/company/datarift-ai"  // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            LinkedIn
          </a>
        </div>

        {/* Address Information */}
        <div className="text-sm">
          <p>NewYork, United States</p>
          {/* <p>Email: </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full py-4 flex justify-center items-center border-t border-gray-200 dark:border-gray-700 text-gray-500 text-sm mt-8">
    © {new Date().getFullYear()} Winnie Wang. All rights reserved.
  </footer>
);

export default Footer;

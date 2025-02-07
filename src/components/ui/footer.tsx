import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-300">
      <div className="text-sm">&copy; 2025 Beehive</div>
      <nav className="flex gap-4">
        <a href="#privacy" className="text-blue-500">Privacy Policy</a>
        <a href="#terms" className="text-blue-500">Terms of Service</a>
        <a href="#contact" className="text-blue-500">Contact Us</a>
      </nav>
    </footer>
  );
};

export default Footer;

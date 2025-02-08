import React from 'react';
import { Button } from './button';


const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
      <div>
        <img src="/beehive_v2.png" alt="Logo" className="h-8 rounded-full" />
      </div>
      <nav className="flex gap-4 items-center">
        <a href="#explore" className="text-blue-500">Explore</a>
        <a href="#vote" className="text-blue-500">Vote</a>
        <a href="#lending" className="text-blue-500">Lending</a>
      </nav>
      <Button variant="default">Connect wallet</Button>
    </header>
  );
};

export default Header;

import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <section className="p-4 bg-white border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Tokenomics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-xl font-semibold">Total Supply</h3>
          <p className="text-gray-700">1,000,000,000 Tokens</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-xl font-semibold">Circulating Supply</h3>
          <p className="text-gray-700">500,000,000 Tokens</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-xl font-semibold">Market Cap</h3>
          <p className="text-gray-700">$1,000,000,000</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-xl font-semibold">Token Distribution</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>50% - ICO</li>
            <li>30% - Vault self-detained</li>
            <li>20% - Ecosystem & community</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;

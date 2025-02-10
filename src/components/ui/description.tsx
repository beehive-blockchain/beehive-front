import React from 'react';
import { Button } from './button';

export default function Description() {
  return (
    <section className="p-8 bg-gradient-to-r from-blue-300 to-purple-400 text-white rounded-md shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Welcome to Our Revolutionary Crypto Project</h2>
      <p className="mb-6">
        Join us in transforming the financial landscape with our cutting-edge decentralized platform. Experience secure, transparent transactions powered by blockchain technology, ensuring the highest level of data integrity and immutability.
      </p>
      <p className="mb-6">
        Our platform prioritizes user privacy and security, offering fast transaction processing, minimal fees, and an intuitive interface. Be part of a more inclusive and efficient financial ecosystem.
      </p>
      <p className="mb-6">
        Whether you're an investor or a business looking to integrate blockchain solutions, we provide the tools and resources you need to thrive in the digital economy.
      </p>
      <Button variant="primary">Get Started</Button>
    </section>
  );
};
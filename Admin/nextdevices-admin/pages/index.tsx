import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home: React.FC = () => {
  return (
    <div className="bg-blue-500 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
      </div>
    </div>
  );
};

export default Home;

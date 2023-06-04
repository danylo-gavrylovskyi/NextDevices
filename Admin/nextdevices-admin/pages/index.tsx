import React from 'react';
import { Inter } from 'next/font/google';
import { signOut, useSession } from 'next-auth/react';

import { Layout } from './components/Layout';

const inter = Inter({ subsets: ['latin'] });

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <Layout>
      <header className="text-center">
        Signed in as <span className="underline">{session?.user?.email}</span>
        <button
          className="bg-blue-900 rounded-3xl text-white py-1.5 px-4 ml-6"
          onClick={() => signOut()}>
          Sign out
        </button>
      </header>
    </Layout>
  );
};

export default Home;

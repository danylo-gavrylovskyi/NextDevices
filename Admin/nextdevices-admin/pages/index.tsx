import React from 'react';
import { Inter } from 'next/font/google';
import { useSession, signIn, signOut } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

const Home: React.FC = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-500 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn('google')}
            className="bg-white p-4 px-6 rounded-2xl font-bold">
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <span>Signed in as {session.user?.email}</span>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Home;

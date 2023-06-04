import React from 'react';

import { Navigation } from './Navigation';

type childProp = {
  children: React.ReactNode;
};

export const Layout: React.FC<childProp> = ({ children }) => {
  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Navigation></Navigation>
      <div className="mt-4 mr-4 mb-4 pt-2 bg-white flex-grow rounded-xl">{children}</div>
    </div>
  );
};

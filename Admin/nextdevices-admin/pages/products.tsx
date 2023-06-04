import Link from 'next/link';
import React from 'react';
import { Layout } from './components/Layout';

const Products: React.FC = () => {
  return (
    <Layout>
      <div className="mt-2 ml-10">
        <Link href="/products/new">
          <button className="bg-blue-900 text-white py-3 px-6 rounded-3xl">Add new product</button>
        </Link>
      </div>
    </Layout>
  );
};

export default Products;

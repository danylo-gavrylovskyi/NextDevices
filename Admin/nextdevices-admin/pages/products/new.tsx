import React from 'react';
import { Layout } from '../components/Layout';

const NewProduct: React.FC = () => {
  return (
    <Layout>
      <div className="mt-1 mx-10 text-blue-900 text-xl">
        <h1 className="text-2xl font-bold mb-20">New Product</h1>
        <section className="mb-6">
          Product name<br></br>
          <input placeholder="product name"></input>
        </section>
        <section className="mb-6">
          Description<br></br>
          <textarea placeholder="description" className="h-10"></textarea>
        </section>
        <section className="mb-20">
          Price<br></br>
          <input placeholder="price"></input>
        </section>
        <button className="bg-blue-900 py-1 px-6 rounded-lg text-white mb-4">Save</button>
      </div>
    </Layout>
  );
};

export default NewProduct;

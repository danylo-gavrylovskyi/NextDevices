import React from 'react';
import { Layout } from '../components/Layout';

const NewProduct: React.FC = () => {
  return (
    <Layout>
      <div className="mt-1 ml-10 text-blue-900 text-xl">
        <h1 className="text-2xl mb-6 font-bold">New Product</h1>
        <section>
          Product name<br></br>
          <input placeholder="product name"></input>
        </section>
        <section>
          Description<br></br>
          <input placeholder="description"></input>
        </section>
        <section>
          Price<br></br>
          <input placeholder="price"></input>
        </section>
      </div>
    </Layout>
  );
};

export default NewProduct;

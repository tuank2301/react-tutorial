import React from 'react';
import { useFetch } from './02-useFetch';
const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
  const { loading } = useFetch(url);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;

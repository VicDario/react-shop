import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  const GetProducts = async (API) => {
    const { data } = await axios(API);
    setProducts(data);
  };
  useEffect(() => {
    GetProducts(API);
  }, [API]);

  return products;
};

export default useGetProducts;

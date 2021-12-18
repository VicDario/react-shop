import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';

import axios from 'axios';

import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products?limit=40&offset=0';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, []);
	return (
		<section className="main-container">
			<div className="ProductList">
				{
					products.map((product, index) => {
						return <ProductItem key={index} product={product} />
					})
				}
			</div>
		</section>
	);
};

export default ProductList;

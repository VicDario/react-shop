import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import '@styles/ProductItem.scss';

import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleAddToCart = item => {
		addToCart(item);
	};

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.tile} />
			<div className="product-info">
				<div>
					<p>${parseFloat(product.price).toFixed(2)}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleAddToCart(product)} >
					<img src={addToCartImage} alt="Add to cart" />
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;

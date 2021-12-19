import React from 'react';

import '@styles/OrderItem.scss';

import close from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
	console.log('hola');
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${parseFloat(product.price).toFixed(2)}</p>
			<img src={close} alt="close" />
		</div>
	);
}

export default OrderItem;
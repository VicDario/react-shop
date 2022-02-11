import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Image from 'next/image';

import styles from '@styles/ProductItem.module.scss';

import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image
        src={product.images[0]}
        alt={product.tile}
        width="100%"
        height="100%"
        layout="responsive"
      />
      <div className={styles['product-info']}>
        <div>
          <p>${parseFloat(product.price).toFixed(2)}</p>
          <p>{product.title}</p>
        </div>
        <button onClick={() => handleAddToCart(product)}>
          <Image src={addToCartImage} alt="Add to cart" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

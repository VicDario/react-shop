import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';

import styles from '@styles/ProductItem.module.scss';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

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
        <button className={styles['more-clickable-area']} onClick={() => handleAddToCart(product)}>
          {state.cart.includes(product) ? (
            <div className={`${styles.disabled} ${styles['add-to-cart-btn']}`}>
              <Image src={addedToCartImage} alt="added to cart" />
            </div>
          ) : (
            <div className={`${styles.pointer} ${styles['added-to-cart-btn']}`}>
              <Image src={addToCartImage} alt="add to cart" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

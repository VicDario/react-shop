import { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';

import styles from '@styles/OrderItem.module.scss';

import close from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image
          src={product?.images[0]}
          alt={product?.title}
          width={500}
          height={500}
          layout="responsive"
        />
      </figure>
      <p>{product?.title}</p>
      <p>${parseFloat(product?.price).toFixed(2)}</p>
      <button className={styles['button-order']} onClick={() => handleRemove(product)}>
        <Image src={close} alt="close" />
      </button>
    </div>
  );
};

export default OrderItem;

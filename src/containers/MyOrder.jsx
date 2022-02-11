import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';

import AppContext from '@context/AppContext';

import styles from '@styles/MyOrder.module.scss';

import arrow from '@icons/flechita.svg';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={arrow} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((product) => {
          return <OrderItem product={product} key={`orderItem-${product.id}`} />;
        })}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link href="/checkout">
          <a>
            <button className={styles['primary-button']}>Checkout</button>
          </a>
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;

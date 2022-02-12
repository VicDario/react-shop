/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state, clearCart } = useContext(AppContext);
  const router = useRouter();
  const date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum.toFixed(2);
  };
  const handlePayment = () => {
    alert('Payment Success');
    clearCart();
    router.push('/');
  };
  return (
    <>
      <Head>
        <title>Yard Store - Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>{date}</span>
                <span>{state.cart.length} articles</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
          </div>
          {state.cart.map((product) => {
            return <OrderItem product={product} key={`orderItem-${product.id}`} />;
          })}
          {state.cart.length > 0 ? (
            <button onClick={handlePayment} className={styles.button}>
              Go to pay
            </button>
          ) : (
            <Link href="/">
              <a className={`${styles.button} ${styles.link}`}>Go to Home</a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;

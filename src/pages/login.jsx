/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import Link from 'next/link';
import axios from 'axios';

import styles from '@styles/Login.module.scss';

import yardLogo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const { setToken, setUser } = useContext(AppContext);
  const router = useRouter();
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', data);
    if (response.status === 201) {
      setToken(response.data.access_token);
      const login = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: { Authorization: `Bearer ${response.data.access_token}` },
      });
      setUser(login.data);
      router.push('/');
    } else alert('Error');
  };
  return (
    <div className={styles.login}>
      <div className={styles['form-container']}>
        <div className={styles['login-logo']}>
          <Image src={yardLogo} layout="responsive" width={200} height={200} alt="Yard logo" />
        </div>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.com"
            className={`${styles['input']} ${styles['input-email']}`}
          />

          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className={`${styles['input']} ${styles['input-password']}`}
          />

          <input
            type="submit"
            value="Log in"
            className={`${styles['primary-button']} ${styles['login-button']}`}
          />
          <Link href="/">
            <a>Forgot my password</a>
          </Link>
        </form>

        <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;

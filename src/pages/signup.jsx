import { useRef, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AppContext from '@context/AppContext';
import axios from 'axios';

import styles from '@styles/CreateAccount.module.scss';
import yardLogo from '@logos/logo_yard_sale.svg';

const CreateAccount = () => {
  const form = useRef(null);
  const router = useRouter();
  const { setUser } = useContext(AppContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      role: 'customer',
    };
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/users', data);
      setUser(response.data);
      router.push('/login');
      alert('User created successfully');
    } catch (error) {
      alert('Ops! Something went wrong');
    }
  };
  return (
    <div className={styles.CreateAccount}>
      <div className={styles['CreateAccount-container']}>
        <div className={styles.logo}>
          <Image src={yardLogo} layout="responsive" width={200} height={200} alt="Yard logo" />
        </div>
        <h1 className={styles.title}>Create Account</h1>
        <form onSubmit={handleRegister} className={styles.form} ref={form}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className={`${styles.input} ${styles['input-name']}`}
          />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="johndoe@example.com"
            className={`${styles.input} ${styles['input-email']}`}
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className={`${styles.input} ${styles['input-password']}`}
          />
          <button type="submit" className={`${styles['primary-button']} ${styles['login-button']}`}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

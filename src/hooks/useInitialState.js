import { useState } from 'react';

const initialState = {
  cart: [],
  token: null,
  user: null,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  const setUser = (payload) => {
    setState({
      ...state,
      user: payload,
    });
  };

  const setToken = (payload) => {
    setState({
      ...state,
      token: payload,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    setUser,
    setToken,
  };
};

export default useInitialState;

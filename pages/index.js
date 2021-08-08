import React from "react";
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import ShoppingCartContainer from "../src/components/shoppingCartContainer";
import initializeStore  from '../src/store';

function index() {
  return (
    <div>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Shopping Cart" />
      </Head>
      <Provider store={initializeStore()}>
        <ShoppingCartContainer />
      </Provider>
    </div>
  );
}

export default index;

import React from 'react';
import Layout from '@icedesign/layout';
import Footer from './components/Footer';
import styles from './index.module.scss';

export default function UserLayout(props) {
  return (
    /**
    * 这里不使用任何样式，样式依赖登录页本身的样式
    */
    <Layout >
      {props.children}
    <Footer />
    </Layout>
  );
}

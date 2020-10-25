import React from 'react';

import ControlBar from '../../common/ControlBar/ControlBar';
import ProductListImages from '../../features/ProductListImages/ProductListImagesContainer';
import PageNotFound from '../../views/PageNotFound/PageNotFound';

import styles from './ProductList.module.scss';

const ProductList = ({ error }) => {
  if (error) return <PageNotFound />;
  else
    return (
      <div className='container'>
        <div className='row'>
          <div className={styles.topControlbar}>
            <h2>Furniture</h2>
            <ControlBar />
          </div>
        </div>
        <div className='row'>
          <div className='col-9'>
            <ProductListImages />
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    );
};

export default ProductList;

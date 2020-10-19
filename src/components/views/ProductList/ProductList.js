import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ProductList = ({ id, name, products, error }) => {
  if (error) return <PageNotFound />;
  else
    return (
      <div>
        <div className='navbar'>
          <h2>{name}</h2>
        </div>
        <div>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
          </ul>
        </div>
        <div className='container'>
          <div className='col-9'>
            <div className='row'>
              {products &&
                products
                  .filter(item => item.category === id)
                  .map((product, i) => (
                    <div key={i} className='col-4'>
                      <ProductBox {...product} />
                    </div>
                  ))}
            </div>
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    );
};

ProductList.propTypes = {
  category: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

export default ProductList;

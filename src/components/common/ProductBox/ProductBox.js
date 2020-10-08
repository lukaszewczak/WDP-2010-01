import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  id,
  name,
  image,
  price,
  oldPrice,
  promo,
  stars,
  setCompare,
  count,
  compare,
  favourite,
  setFavourite,
}) => {
  const compareHandler = event => {
    event.preventDefault();
    const maxProductsToCompare = 4;
    const isProductAddedToCompare =
      compare.products &&
      compare.products.reduce(
        (accumulator, product) => accumulator || product.id === id,
        false
      );

    if (isProductAddedToCompare !== true) {
      count < maxProductsToCompare
        ? setCompare({ id, image })
        : alert(`You can compare maximum of ${maxProductsToCompare} products!`);
    }
  };
  const addToFavouriteHandler = event => {
    event.preventDefault();
    const isProductAddedToFavourite =
      favourite.products &&
      favourite.products.reduce(
        (accumulator, product) => accumulator || product.id === id,
        false
      );
    // const maxProductsToCompare = 4;
    // const isProductAddedToCompare =
    //   compare.products &&
    //   compare.products.reduce(
    //     (accumulator, product) => accumulator || product.id === id,
    //     false
    //   );
    if (isProductAddedToFavourite !== true) {
      setFavourite({ id, image });
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' onClick={addToFavouriteHandler}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' onClick={compareHandler}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.oldPrice}>{oldPrice}</div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  setCompare: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  compare: PropTypes.object.isRequired,
  favourite: PropTypes.object.isRequired,
  setFavourite: PropTypes.func.isRequired,
};

export default ProductBox;

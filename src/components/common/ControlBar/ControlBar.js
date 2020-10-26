import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ControlBar.module.scss';

const ControlBar = ({ setSortParams }) => {
  const handleSortChange = value => {
    setSortParams(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sort}>
        <label htmlFor='sortBy'>Sort By</label>
        <select id='sortBy' className='custom-select'>
          <option value='1' onClick={() => this.handleSortChange('priceUp')}>
            Price lowest first
          </option>
          <option value='2' onClick={() => this.handleSortChange('priceDown')}>
            Price higher first
          </option>
          <option value='3' onClick={() => this.handleSortChange('starsUp')}>
            Stars descending
          </option>
          <option value='4' onClick={() => handleSortChange('starsDown')}>
            Stars asceding
          </option>
        </select>
      </div>
      <div className={styles.show}>
        <label htmlFor='show'>Show</label>
        <select id='show' className='custom-select'>
          <option value='12'>12</option>
          <option value='24'>24</option>
          <option value='36'>36</option>
          <option value='48'>48</option>
        </select>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon className={styles.iconLarge} icon={faThLarge} />
        <FontAwesomeIcon className={styles.iconList} icon={faThList} />
      </div>
    </div>
  );
};
ControlBar.propTypes = {
  setSortParams: PropTypes.func,
};

export default ControlBar;

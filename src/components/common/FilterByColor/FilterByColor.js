import PropTypes from 'prop-types';
import React from 'react';

import styles from './FilterByColor.module.scss';

const FilterByColor = ({ colors, activeColor }) => {
  return (
    <div className={styles.wrapper}>
      <p>
        <span className={styles.title}>FILTER BY COLOR</span>
      </p>
      <div className={styles.borderLine}>
        {colors &&
          colors.map(({ name }, index) => {
            const activeStyle = activeColor === name ? styles.activeText : styles.text;
            const activeBoxStyle =
              activeColor === name ? styles.colorBoxActive : styles.colorBox;
            return (
              <div key={index}>
                <p className={activeStyle}>
                  <span className={activeBoxStyle} style={{ background: name }}></span>
                  <span className={styles.fontDecoration}>{name}</span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

FilterByColor.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  activeColor: PropTypes.string.isRequired,
};

export default FilterByColor;

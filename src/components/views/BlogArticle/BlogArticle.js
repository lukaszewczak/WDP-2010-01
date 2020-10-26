import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import CountComments from '../../features/CountComments/CountComments';

import styles from './BlogArticle.module.scss';

const BlogArticle = ({ id, date, comments, title, description, image }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={id} />
    </div>
    <div className={styles.body}>
      <div className='row'>
        <div className='col-12'>
          <p>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> {date}
          </p>
        </div>
        <div className='col-6'>
          <CountComments comments={comments} />
        </div>
      </div>
      <h4>
        <a href='/#'>{title}</a>
      </h4>
      <p className={styles.description}>{description}</p>
      <BlogArticle exact path={'/blog/:blogId'} component={BlogArticle} />
    </div>
  </div>
);

BlogArticle.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string,
  comments: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default BlogArticle;

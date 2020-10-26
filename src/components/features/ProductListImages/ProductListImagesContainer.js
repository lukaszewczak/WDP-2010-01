import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getCategoryById, getSorted } from '../../../redux/productsRedux';

import ProductListImages from './ProductListImages';

const mapStateToProps = (state, props) => {
  const category = getCategoryById(state, props.match.params.categoryId);
  return {
    ...category,
    products: getSorted(state),
  };
};

export default withRouter(connect(mapStateToProps)(ProductListImages));

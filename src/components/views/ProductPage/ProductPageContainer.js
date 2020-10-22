import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { setCompare, getCount } from '../../../redux/compareRedux';
import { addToFavourite, getProductById } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';

const mapStateToProps = (state, props) => {
  const product = getProductById(state, props.match.params.productId);
  return {
    ...product,
    count: getCount(state),
    compare: state.compare,
  };
};

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
  addToFavourite: value => dispatch(addToFavourite(value)),
  addToCart: value => dispatch(addToCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

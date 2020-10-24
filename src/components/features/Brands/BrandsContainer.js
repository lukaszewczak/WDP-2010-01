import Brands from './Brands';
import { connect } from 'react-redux';
import { getAllBrands } from '../../../redux/brandsRedux';
import { getViewport } from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  brands: getAllBrands(state),
  viewport: getViewport(state),
});

export default connect(mapStateToProps)(Brands);

import { connect } from 'react-redux';

import { setSortParams } from '../../../redux/productsRedux';

import ControlBar from './ControlBar';

const mapDispatchToProps = dispatch => ({
  setSortParams: value => dispatch(setSortParams(value)),
});

export default connect(null, mapDispatchToProps)(ControlBar);

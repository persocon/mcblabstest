import { connect } from 'react-redux';
import { setRecordingsRequest } from '../actions/recordings';
import Component from '../components/RecordingsComponent';

const mapStateToProps = state => ({ recordings: state.recordings });

const Container = connect(mapStateToProps, { setRecordingsRequest })(Component);

export default Container;

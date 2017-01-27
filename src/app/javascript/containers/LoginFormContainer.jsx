import { connect } from 'react-redux';
import { setUser } from '../actions/user';
import { setAppScreen } from '../actions/app';
import Component from '../components/LoginFormComponent';

const Container = connect(null, { setUser, setAppScreen })(Component);

export default Container;

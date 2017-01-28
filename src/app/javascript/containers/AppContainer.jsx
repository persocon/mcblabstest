import { connect } from 'react-redux';
import { getAppScreen, resetApp } from '../actions/app';
import { resetUser, getUser } from '../actions/user';
import Component from '../components/AppComponent';

const mapStateToProps = state => ({ app: state.app, user: state.user });

const Container = connect(mapStateToProps, {
  getAppScreen,
  resetApp,
  resetUser,
  getUser,
})(Component);

export default Container;

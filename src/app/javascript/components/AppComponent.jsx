import React, { PropTypes } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

import LoginFormContainer from '../containers/LoginFormContainer';
import RecordingsContainer from '../containers/RecordingsContainer';
import { setUser } from '../actions/user';

class AppComponent extends React.Component {
  componentWillMount() {
    this.props.getAppScreen();
  }
  screen() {
    if (this.props.app.screen === 'login') {
      return(<LoginFormContainer />);
    } else if (this.props.app.screen === 'recordings') {
      return(<RecordingsContainer />);
    }
    return(<LoginFormContainer />); // redundant answer if no case fulfill
  }
  render() {
    return (
      <section>
        <AppBar title='React Toolbox' leftIcon='menu'>
          MCBLabs Test
        </AppBar>
        {this.screen()}
      </section>
    );
  }
}
AppComponent.propTypes = {
  getAppScreen: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
};
export default AppComponent;

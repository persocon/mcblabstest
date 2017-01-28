import React, { PropTypes } from 'react';
import { AppBar, Button, Navigation } from 'react-toolbox';

import LoginFormContainer from '../containers/LoginFormContainer';
import RecordingsContainer from '../containers/RecordingsContainer';

class AppComponent extends React.Component {
  componentWillMount() {
    this.props.getAppScreen();
  }
  screen() {
    if (this.props.app.screen === 'login') {
      return (<LoginFormContainer />);
    } else if (this.props.app.screen === 'recordings') {
      return (<RecordingsContainer />);
    }
    return (<LoginFormContainer />); // redundant answer if no case fulfill
  }
  logout() {
    this.props.resetApp();
    this.props.resetUser();
  }
  renderLogoutButton() {
    return (
      <div style={{ marginLeft: 'auto' }}>
        <Navigation type="horizontal">
          <Button
            icon="exit_to_app"
            floating
            accent
            mini
            onMouseUp={event => this.logout(event)}
          />
        </Navigation>
      </div>
    );
  }
  render() {
    return (
      <section>
        <AppBar title="React Toolbox">
          MCBLabs Test
          {this.props.user.token ? this.renderLogoutButton() : ''}
        </AppBar>
        {this.screen()}
      </section>
    );
  }
}
AppComponent.propTypes = {
  getAppScreen: PropTypes.func.isRequired,
  resetApp: PropTypes.func.isRequired,
  resetUser: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
export default AppComponent;

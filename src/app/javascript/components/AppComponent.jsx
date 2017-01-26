import React, { PropTypes } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

import LoginFormComponent from './LoginFormComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <section>
        <AppBar title='React Toolbox' leftIcon='menu'>
          MCBLabs Test
        </AppBar>
        <LoginFormComponent />
      </section>
    );
  }
}
export default AppComponent;

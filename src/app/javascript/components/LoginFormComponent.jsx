import React, { PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';
import { Button, IconButton } from 'react-toolbox/lib/button';

import { fnAuth } from '../services/api';

class LoginFormComponent extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    if(email && password) {
      fnAuth({email, password});
    } else {
      console.error('oops');
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Input type="email" label="Email address" icon="email" />
        <Input type="password" label="Password" icon="lock" />
        <Button label="Submit" raised primary />
      </form>
    );
  }
}

export default LoginFormComponent;

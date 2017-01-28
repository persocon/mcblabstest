import React, { PropTypes } from 'react';
import { fnAuth } from '../services/api';
import Input from 'react-toolbox/lib/input';
import { Button, IconButton, Snackbar } from 'react-toolbox';

class LoginFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]');
    const password = event.target.querySelector('input[type="password"]');
    if(email.value && password.value) {
      let formData = new FormData();
      formData.append('email', email.value);
      formData.append('password', password.value);
      fnAuth(formData).then((data) => {
        if(data.token) {
          // call dispatch to the right place
          this.props.setUser(data.token);
          this.props.setAppScreen('recordings'); // go to recordings list
        } else {
          this.showSnackBar();
        }
      });
    } else {
      this.showSnackBar();
    }
  }

  showSnackBar() {
    this.setState({active: true});
  }

  hideSnackBar() {
    this.setState({ active: false });
  }

  render() {
    return (
      <section className='content'>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <Input type="email" label="Email address" icon="email" />
          <Input type="password" label="Password" icon="lock" />
          <Button label="Submit" raised primary />
          <Snackbar
            action='Dismiss'
            active={this.state.active}
            label='An Error occurred, try again later.'
            timeout={2000}
            onClick={() => this.hideSnackBar()}
            onTimeout={() => this.hideSnackBar()}
            type='cancel'
          />
        </form>
      </section>
    );
  }
}

export default LoginFormComponent;

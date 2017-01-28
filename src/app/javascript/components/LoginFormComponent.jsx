import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { Button, Snackbar, Input } from 'react-toolbox';

import { fnAuth } from '../services/api';
import LoadingComponent from './LoadingComponent';

class LoginFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      lock: false,
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]');
    const password = event.target.querySelector('input[type="password"]');
    if (email.value && password.value) {
      this.send(email.value, password.value);
      this.toggleForm('lock');
    } else {
      this.showSnackBar();
      this.toggleForm('unlock');
    }
  }

  send(email, password) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    fnAuth(formData).then((data) => {
      if (data.token) {
        // call dispatch to the right place
        this.props.setUser(data.token);
        this.props.setAppScreen('recordings'); // go to recordings list
      } else {
        // show error if not status 200
        this.showSnackBar();
        this.toggleForm('unlock');
      }
    }).catch((e) => {
      // show error in case of crazy error;
      this.showSnackBar();
      this.toggleForm('unlock');
      // raise error about the error ?!
      throw new Error(e.message);
    });
  }

  toggleForm(type = 'unlock') {
    if (type === 'lock') {
      this.setState({ lock: true });
    } else {
      this.setState({ lock: false });
    }
  }

  showSnackBar() {
    this.setState({ active: true });
  }

  hideSnackBar() {
    this.setState({ active: false });
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={'fade'}
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <section className="content">
          <form ref={(form) => { this.form = form; }} onSubmit={event => this.onSubmit(event)}>
            <Input type="email" label="Email address" icon="email" disabled={this.state.lock} />
            <Input type="password" label="Password" icon="lock" disabled={this.state.lock} />
            <Button label="Submit" raised primary disabled={this.state.lock} />
            <Snackbar
              action="Dismiss"
              active={this.state.active}
              label="An Error occurred, try again later."
              timeout={2000}
              onClick={() => this.hideSnackBar()}
              onTimeout={() => this.hideSnackBar()}
              type="cancel"
            />
          </form>
          {this.state.lock ? <LoadingComponent /> : ''}
        </section>
      </ReactCSSTransitionGroup>
    );
  }
}

LoginFormComponent.propTypes = {
  setUser: PropTypes.func.isRequired,
  setAppScreen: PropTypes.func.isRequired,
};

export default LoginFormComponent;

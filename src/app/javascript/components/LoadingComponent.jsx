import React, { PropTypes } from 'react';
import { ProgressBar } from 'react-toolbox';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class LoadingComponent extends React.Component {
  render() {
    return(
      <ReactCSSTransitionGroup
        transitionName={"fade"}
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div className='loading'>
          <ProgressBar type='circular' mode='indeterminate' multicolor />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
export default LoadingComponent;

import React, { PropTypes } from 'react';
import { ProgressBar } from 'react-toolbox';
class LoadingComponent extends React.Component {
  render() {
    return(
      <div className='loading'>
        <ProgressBar type='circular' mode='indeterminate' multicolor />
      </div>
    );
  }
}
export default LoadingComponent;

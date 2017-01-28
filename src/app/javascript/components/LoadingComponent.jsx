import React, { PropTypes } from 'react';
import { ProgressBar } from 'react-toolbox';
class LoadingComponent extends React.Component {
  render() {
    return(<ProgressBar type='circular' mode='indeterminate' multicolor />);
  }
}
export default LoadingComponent;

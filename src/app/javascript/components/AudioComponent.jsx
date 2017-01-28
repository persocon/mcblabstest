import React, { PropTypes } from 'react';

class AudioComponent extends React.Component {
  render() {
    // we could make an audio with custom controls here
    return(
      <div>
        <audio controls preload='none'>
          <source src={this.props.path} />
          Your browser doesn't support html5 audio.
        </audio>
      </div>
    );
  }
}
AudioComponent.propTypes = {
  path: PropTypes.string.isRequired
}

export default AudioComponent;

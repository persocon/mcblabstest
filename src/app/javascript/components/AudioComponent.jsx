import React, { PropTypes } from 'react';

function AudioComponent(props) {
  // we could make an audio with custom controls here
  return (
    <div>
      <audio controls preload="none">
        <source src={props.path} />
        Your browser doesn&apos;t support html5 audio.
      </audio>
    </div>
  );
}

AudioComponent.propTypes = {
  path: PropTypes.string.isRequired,
};

export default AudioComponent;

import React, { PropTypes } from 'react';

function TextComponent(props) {
  return (
    <p>{props.text}</p>
  );
}

TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextComponent;

import React, { PropTypes } from 'react';

class TextComponent extends React.Component {
  render() {
    return(
      <p>{this.props.text}</p>
    );
  }
}
TextComponent.propTypes = {
  text: PropTypes.string.isRequired
}

export default TextComponent;

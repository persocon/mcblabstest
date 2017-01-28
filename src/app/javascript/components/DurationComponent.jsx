import React, { PropTypes } from 'react';
import { Chip, Avatar } from 'react-toolbox';

class DurationComponent extends React.Component {
  math() {
    const sec_num = parseInt(this.props.duration, 10);
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    const result = `${hours}:${minutes}:${seconds}`;
    return result;
  }
  render() {
    return(
      <Chip className='durationComponent chip'>
        <Avatar icon='timer' />
        {this.math()}
      </Chip>
    );
  }
}
DurationComponent.propTypes = {
  duration: PropTypes.number.isRequired
}

export default DurationComponent;

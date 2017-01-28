import React, { PropTypes } from 'react';
import { Chip, Avatar } from 'react-toolbox';
import Moment from 'react-moment';

class DateComponent extends React.Component {
  render() {
    return(
      <Chip className='dateComponent chip'>
        <Avatar style={{backgroundColor: 'deepskyblue'}} icon='today' />
        <Moment format='DD/MM/YYYY HH:mm:ss' tz='Europe/Berlin'>{this.props.date}</Moment>
      </Chip>
    );
  }
}
DateComponent.propTypes = {
  date: PropTypes.string.isRequired
}

export default DateComponent;

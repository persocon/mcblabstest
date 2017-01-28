import React, { PropTypes } from 'react';
import { Chip, Avatar } from 'react-toolbox';
import Moment from 'react-moment';

function DateComponent(props) {
  return (
    <Chip className="dateComponent chip">
      <Avatar style={{ backgroundColor: 'deepskyblue' }} icon="today" />
      <Moment format="DD/MM/YYYY HH:mm:ss" tz="Europe/Berlin">{props.date}</Moment>
    </Chip>
  );
}

DateComponent.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateComponent;

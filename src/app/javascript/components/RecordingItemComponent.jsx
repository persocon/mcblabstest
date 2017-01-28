import React, { PropTypes } from 'react';

import StarRatingComponent from './StarRatingComponent';
import TextComponent from './TextComponent';
import DurationComponent from './DurationComponent';
import AudioComponent from './AudioComponent';
import DateComponent from './DateComponent';

class RecordingItemComponent extends React.Component {
  render() {
    return (
      <li>
        <TextComponent text={this.props.recording.transcript} />
        <StarRatingComponent rating={this.props.recording.rating} />
        <DurationComponent duration={this.props.recording.duration} />
        <AudioComponent path={this.props.recording.path} />
        <DateComponent date={this.props.recording.created} />
      </li>
    );
  }
}
RecordingItemComponent.propTypes = {
  recording: PropTypes.object.isRequired,
};
export default RecordingItemComponent;

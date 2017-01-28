import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import StarRatingComponent from './StarRatingComponent';
import TextComponent from './TextComponent';
import DurationComponent from './DurationComponent';
import AudioComponent from './AudioComponent';
import DateComponent from './DateComponent';

function RecordingItemComponent(props) {
  return (
    <ReactCSSTransitionGroup
      transitionName={'fade'}
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      <li>
        <TextComponent text={props.recording.transcript} />
        <StarRatingComponent rating={props.recording.rating} />
        <DurationComponent duration={props.recording.duration} />
        <AudioComponent path={props.recording.path} />
        <DateComponent date={props.recording.created} />
      </li>
    </ReactCSSTransitionGroup>
  );
}
RecordingItemComponent.propTypes = {
  recording: PropTypes.object.isRequired,
};
export default RecordingItemComponent;

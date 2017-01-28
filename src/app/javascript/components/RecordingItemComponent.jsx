import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import StarRatingComponent from './StarRatingComponent';
import TextComponent from './TextComponent';
import DurationComponent from './DurationComponent';
import AudioComponent from './AudioComponent';
import DateComponent from './DateComponent';

class RecordingItemComponent extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={"fade"}
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        >
        <li>
            <TextComponent text={this.props.recording.transcript} />
            <StarRatingComponent rating={this.props.recording.rating} />
            <DurationComponent duration={this.props.recording.duration} />
            <AudioComponent path={this.props.recording.path} />
            <DateComponent date={this.props.recording.created} />
        </li>
      </ReactCSSTransitionGroup>
    );
  }
}
RecordingItemComponent.propTypes = {
  recording: PropTypes.object.isRequired,
};
export default RecordingItemComponent;

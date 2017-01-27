import React, { PropTypes } from 'react';
import Moment from 'react-moment';

class RecordingItemComponent extends React.Component {
  transcript() {
    if (this.props.recording.transcript) {
      return(this.props.recording.transcript);
    }
  }
  rating() {
    if (this.props.recording.rating) {
      const percent = Math.floor((100 / this.props.recording.rating) * 1);
      return(
        <div className="star-rating">
          <span style={{width: `${percent}%`}}></span>
        </div>
      );
    }
  }
  duration() {
    if (this.props.recording.duration) {
      // convert to int
      const sec_num = parseInt(this.props.recording.duration, 10);
      let hours   = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return(`${hours}:${minutes}:${seconds}`);
    }
  }
  audio() {
    if (this.props.recording.path) {
      return(
        <div>
          <audio controls>
            <source src={this.props.recording.path} />
            Your browser doesn't support html5 audio.
          </audio>
        </div>
      );
    }
  }
  created() {
    if (this.props.recording.created) {
      // const humanDate = moment(this.props.recording.created, 'Europe/Berlin');
      return(<Moment format='DD/MM/YYYY HH:mm:ss' tz='Europe/Berlin'>{this.props.recording.created}</Moment>);
    }
  }
  render() {
    return (
      <li>
        {this.transcript()}
        {this.rating()}
        {this.duration()}
        {this.audio()}
        {this.created()}
      </li>
    );
  }
}
RecordingItemComponent.propTypes = {
  recording: PropTypes.object.isRequired,
};
export default RecordingItemComponent;

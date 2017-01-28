import React, { PropTypes } from 'react';
import RecordingItemComponent from './RecordingItemComponent';
import LoadingComponent from './LoadingComponent';

class RecordingsComponent extends React.Component {
  componentWillMount() {
    this.props.setRecordingsRequest();
  }
  list() {
    if (this.props.recordings.recordings_list &&
      this.props.recordings.recordings_list.length >= 1) {
      const recordingList = this.props.recordings.recordings_list.map((recording, index) => (
        <RecordingItemComponent recording={recording} key={index} />
      ),
      );
      return (<ul className="recordingList">{recordingList}</ul>);
    }
    return (<LoadingComponent />);
  }
  render() {
    return (
      <section className="content">
        {this.list()}
      </section>
    );
  }
}
RecordingsComponent.propTypes = {
  setRecordingsRequest: PropTypes.func.isRequired,
  recordings: PropTypes.object.isRequired,
};
export default RecordingsComponent;

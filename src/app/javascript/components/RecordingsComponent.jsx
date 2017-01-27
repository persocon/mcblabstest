import React, { PropTypes } from 'react';
import RecordingItemComponent from './RecordingItemComponent';

class RecordingsComponent extends React.Component {
  componentWillMount() {
    this.props.setRecordingsRequest();
  }
  list() {
    if(this.props.recordings.recordings_list.length >= 1) {
      let recordingList = this.props.recordings.recordings_list.map((recording, index) => (
          <RecordingItemComponent recording={recording} key={index} />
        )
      );
      return (<ul className="recordingList">{recordingList}</ul>);
    }
  }
  render() {
    return (
      <section>
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

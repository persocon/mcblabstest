import * as actions from '../../src/app/javascript/actions/recordings.jsx';

describe('(Actions) Recordings', () => {
  it('should create an action to setRecordingsRequest', () => {
    const expectedAction = {
      type: 'SET_RECORDINGS_LIST_REQUEST',
    }
    expect(actions.setRecordingsRequest()).to.eql(expectedAction);
  });

});

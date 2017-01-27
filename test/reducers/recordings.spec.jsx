import reducer from '../../src/app/javascript/reducers/recordings.jsx'

describe('(Reducer) Recordings', () => {
  it('should return the initial state', () => {
    const initialState = {
      recordings_list: []
    }
    expect(reducer(undefined, {})).to.eql(
      initialState
    );
  });
});

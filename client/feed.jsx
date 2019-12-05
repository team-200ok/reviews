/* eslint-disable import/extensions */
import React from 'react';
import Review from './review.jsx';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello from Feed!
        <Review />
      </div>
    );
  }
}

export default Feed;

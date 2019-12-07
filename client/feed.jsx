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
        {this.props.reviews.map((item) => <Review data={item} />)}
      </div>
    );
  }
}

export default Feed;

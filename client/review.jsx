/* eslint-disable import/extensions */
import React from 'react';
import styled, { css } from 'styled-components';
import Stars from './stars.jsx';
import SmallGallery from './smallGallery.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>{this.props.data.user}</div>
        <div>
          <div>
            <Stars stars={this.props.data.stars} />
            Date: {this.props.data.date} </div>
          <div>Review: {this.props.data.text} </div>
          {/* <img src={this.props.data.imageUrl} /> */}
        </div>
        <SmallGallery />
        <div>
          <Button>Useful: {this.props.data.useful} </Button>
          <Button>Funny: {this.props.data.funny} </Button>
          <Button>Cool: {this.props.data.cool} </Button>
        </div>
      </div>
    );
  }
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #e6e6e6;
  color: #666666;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export default Review;

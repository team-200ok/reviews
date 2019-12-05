import React from 'react';
import styled, { css } from 'styled-components';

class SmallGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.photos = ['http://lorempixel.com/640/480/food', 'http://lorempixel.com/640/480/food', 'http://lorempixel.com/640/480/food'];
  }

  render() {
    return (
      <div>
        {this.photos.map((item) => <Photo src={item} />)}
      </div>
    );
  }
}

const Photo = styled.img`
  border-radius: 8px;
  max-width: 60%;
  height: auto;
`;

export default SmallGallery;

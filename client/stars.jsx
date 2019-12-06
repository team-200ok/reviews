import React from 'react';
import styled, { css } from 'styled-components';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let rating = '';
    for (let i = 0; i < this.props.stars; i += 1) {
      rating += '★';
    }
    for (let i = this.props.stars; i < 5; i += 1) {
      rating += '☆';
    }
    return (
      <Star>{rating}</Star>
    );
  }
}

const Star = styled.span`
  color: #d32323;
`;

export default Stars;

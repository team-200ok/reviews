import React from 'react';
import styled, { css } from 'styled-components';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loc = this.props.stars === 0 ? '-222px'
    : this.props.stars === 1 ? '-258px'
    : this.props.stars === 2 ? '-294px' //-294
    : this.props.stars === 3 ? '-330px' //-330
    : this.props.stars === 4 ? '-366px' //-366
    : '-402px';
  }

  render() {
    return (
      <Wrapper loc={this.loc} />
    );
  }
}

const Wrapper = styled.div`
  width: 102px;
  height: 18px;
  overflow: hidden;
  background-image: url(https://s3-media0.fl.yelpcdn.com/assets/public/stars@2x.yelp_design_web.yji-490b09f669eae3020fd5125e972d4179.png);
  background-position: 0 ${props => props.loc};
  background-size: 132px 560px;
  vertical-align: middle;
  margin: 0 10px 0 0;
`;

export default Stars;

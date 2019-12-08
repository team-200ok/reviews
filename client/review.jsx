/* eslint-disable import/extensions */
import React from 'react';
import styled, { css } from 'styled-components';
import Stars from './stars.jsx';
import SmallGallery from './smallGallery.jsx';
import { UsefulIcon, FunnyIcon, CoolIcon } from './icons.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TotalReview>
        <User>{this.props.data.user}</User>
        <ReviewBody>
          <div>
            <Date>
              <Stars stars={this.props.data.stars} />
              {' ' + this.props.data.date} </Date>
            <Text>{this.props.data.text} </Text>
          </div>
          <SmallGallery photos={this.props.data.photos} />
          <div>
            <Button>
              <UsefulIcon />
              <span> Useful {this.props.data.useful} </span>
            </Button>
            <Button>
              <FunnyIcon />
              <span> Funny {this.props.data.funny} </span>
            </Button>
            <Button>
              <CoolIcon />
              <span> Cool {this.props.data.cool} </span>
            </Button>
          </div>
        </ReviewBody>
      </TotalReview>
    );
  }
}

const TotalReview = styled.div`
  width: 605px;
  display: flex;
  flexDirection: row;
  border-bottom: 1px solid #e6e6e6;
  margin: 0px 0px 18px;
  padding: 0px 0px 18px;
`;

const User = styled.div`
  font-family: Helvetica Neue;
  font-size: 14 px;
  font-weight: 700;
  color: #0073bb;
  flexDirection: row;
  width: 222px;
`;

const ReviewBody = styled.div`
  font-family: Helvetica Neue;
  width: 371px;
`;

const Date = styled.div`
  font-weight: 400;
  color: #666;
`;

const Text = styled.div`
  font-size: 12 px;
  margin-bottom: 12 px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  color: #666666;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-weight: 700;
  align-items: center;
  justify-content: space-evenly;
`;

export default Review;

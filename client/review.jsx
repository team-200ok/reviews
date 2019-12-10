/* eslint-disable import/extensions */
import React from 'react';
import Moment from 'moment';
import $ from 'jquery';
import styled, { css } from 'styled-components';
import Stars from './stars.jsx';
import SmallGallery from './smallGallery.jsx';
import { UsefulIcon, FunnyIcon, CoolIcon } from './icons.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.data,
      photos: this.props.data.photos,
    };
    this.onVote = this.onVote.bind(this);
  }

  onVote() {
    const name = event.target.id;
    $.ajax({
      method: 'PUT',
      url: `http://localhost:3001/api/vote/${this.state.review.review_id}/${name}`,
    })
      .then((res) => {
        this.setState({ review: res });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <TotalReview>
        <User>
          <img height="60" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png" />
          <div style={{ margin: '0 0 0 10px' }}>{this.state.review.user}</div>
        </User>
        <ReviewBody>
          <div>
            <Date>
              <Stars stars={this.state.review.stars} />
              {' ' + Moment(this.state.review.date).format('MM/DD/YYYY')} </Date>
            <Text>{this.state.review.text} </Text>
          </div>
          <SmallGallery photos={this.state.photos} date={this.state.review.date}/>
          <ButtonBox>
            <Button id="useful" onClick={this.onVote}>
              <UsefulIcon />
              <span id="useful"> Useful {this.state.review.useful} </span>
            </Button>
            <Button id="funny" onClick={this.onVote}>
              <FunnyIcon />
              <span id="funny"> Funny {this.state.review.funny} </span>
            </Button>
            <Button id="cool" onClick={this.onVote}>
              <CoolIcon />
              <span id="cool"> Cool {this.state.review.cool} </span>
            </Button>
          </ButtonBox>
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
  display: flex;
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
  display: flex;
  flexDirection: row;
`;

const Text = styled.div`
  font-size: 12 px;
  margin-bottom: 12 px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  color: #666666;
  margin: 0.5em 1em 0.5em 0em;
  padding: 0.25em 1em;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export default Review;

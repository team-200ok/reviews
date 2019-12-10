/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import $ from 'jquery';
import Feed from './feed.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
    };
  }

  componentDidMount() {
    const businessId = window.location.pathname;
    this.apiGet(businessId);
  }

  apiGet(businessId) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/api/business${businessId}`,
    })
      .then((data) => {
        this.extractReviews(data);
      })
      .catch((err) => console.error(err));
  }

  extractReviews(data) {
    let tracker = [];
    let reshaped = [];
    for (let ele of data) {
      if (tracker.includes(ele.review_id)) {
        // add element's photo info to the appropriate object
        const photoObj = {
          review_id: ele.review_id,
          photo_id: ele.photo_id,
          caption: ele.caption,
          label: ele.label,
          imageUrl: ele.imageUrl,
        };
        for (let obj of reshaped) {
          if (obj.review_id === photoObj.review_id) {
            obj.photos.push(photoObj);
          }
        }
      } else {
        tracker.push(ele.review_id);
        let newObj = {
          review_id: ele.review_id,
          user: ele.user,
          stars: ele.stars,
          date: ele.date,
          text: ele.text,
          useful: ele.useful,
          funny: ele.funny,
          cool: ele.cool,
          photos: [{
            review_id: ele.review_id,
            photo_id: ele.photo_id,
            caption: ele.caption,
            label: ele.label,
            imageUrl: ele.imageUrl,
          }],
        };
        reshaped.push(newObj);
      }
    }
    this.setState({ reviewList: reshaped });
  }

  render() {
    return (
      <div>
        <Feed reviews={this.state.reviewList} />
      </div>
    );
  }
}

export default App;

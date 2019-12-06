/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Modal from './modal.jsx';

class SmallGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.photos = ['http://lorempixel.com/640/480/food', 'http://lorempixel.com/640/480/food', 'http://lorempixel.com/640/480/food'];
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <PhotoBox>
          {this.photos.map((item) => <Photo src={item} onClick={this.showModal} />)}
        </PhotoBox>
        <Modal show={this.state.show} onClick={this.hideModal} photos={this.photos} />
      </div>
    );
  }
}

const PhotoBox = styled.div`
  flex: 1;
  flexDirection: row;
`;

const Photo = styled.img`
  border-radius: 8px;
  max-width: 40%;
  height: auto;
  margin: 10px;
`;

export default SmallGallery;

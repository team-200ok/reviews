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
          {this.props.photos.map((item) => <Photo src={item.imageUrl} onClick={this.showModal} />)}
        </PhotoBox>
        <Modal show={this.state.show} onClick={this.hideModal} photos={this.props.photos} />
      </div>
    );
  }
}

const PhotoBox = styled.div`
  display: flex;
  flexDirection: row;
  flex-wrap: wrap;
`;

const Photo = styled.img`
  border-radius: 4px;
  max-width: 168px;
  max-height: 168px;
  margin: 5px 10px 5px 0px;
`;

export default SmallGallery;

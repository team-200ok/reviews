/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryPhoto: this.props.photos[0],
    };
    this.changePhoto = this.changePhoto.bind(this);
  }

  changePhoto() {
    for (let ele of this.props.photos) {
      if (ele.photo_id === event.target.id) {
        this.setState({ primaryPhoto: ele });
      }
    }
  }

  render() {
    if (this.props.show === true) {
      return (
        <div>
          <Window>
            <Button type="button" onClick={this.props.onClick}>Close</Button>
            <Gallery>
              <Primary>
                <PrimaryPhoto src={this.state.primaryPhoto.imageUrl} />
              </Primary>
              <PhotoBox>
                {this.props.photos.map((item) => <Photo src={item.imageUrl} onClick={this.changePhoto} id={item.photo_id} />)}
              </PhotoBox>
            </Gallery>
          </Window>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

const Window = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background: transparent;
  color: white;
  align-self: flex-end;
  border: none;
`;

const Gallery = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  margin: 30px;
`;

const Primary = styled.div`
  background: black;
  // width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px 0px 0px 6px;
  padding: 0px 6px;

`;

const PhotoBox = styled.div`
  width: 360px;
  flex: 0;
  background: white;
  flex-direction: column;
  justify-content: center;
  border-radius: 0px 6px 6px 0px;
  padding: 18px;
`;

const PrimaryPhoto = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Photo = styled.img`
  border-radius: 2px;
  width: 300px;
  height: 165px;
  object-fit: cover;
`;

export default Modal;

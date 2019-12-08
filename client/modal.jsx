/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  if (props.show === true) {
    return (
      <div>
        <Window>
          <Button type="button" onClick={props.onClick}>Close</Button>
          <Gallery>
            <Primary>
              <PrimaryPhoto src={props.photos[0].imageUrl} />
            </Primary>
            <PhotoBox>
              {props.photos.map((item) => <Photo src={item.imageUrl} />)}
            </PhotoBox>
          </Gallery>
        </Window>
      </div>
    );
  }
  return (
    <div />
  );
};

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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px 0px 0px 6px;
  padding: 0px 6px;

`;

const PhotoBox = styled.div`
  width: 360px;
  background: white;
  flex-direction: column;
  justify-content: center;
  border-radius: 0px 6px 6px 0px;
  padding: 18px;
`;

const PrimaryPhoto = styled.img`
  width: 100%;
`;

const Photo = styled.img`
  border-radius: 2px;
  width: 300px;
  height: 165px;
  object-fit: cover;
`;

export default Modal;

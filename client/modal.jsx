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
  // flex-wrap: wrap;
  // justify-content: center;
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
  flex-basis: 0;
  flex-grow: 2.5;
  align-items: center;
  justify-content: center;
  // align-self: flex-start;
  border-radius: 6px 0px 0px 6px;
  padding: 0px 6px;

`;

const PhotoBox = styled.div`
  flex-grow: 1;
  // position:fixed;
  background: white;
  flex-direction: column;
  justify-content: center;
  flex-basis: 0;
  border-radius: 0px 6px 6px 0px;
  padding: 30px;
  overflow: hidden;
`;

const PrimaryPhoto = styled.img`
  max-width: 100%;
  height: auto;
`;

const Photo = styled.img`
  border-radius: 2px;
  max-width: 100%;
  height: auto;
`;

export default Modal;

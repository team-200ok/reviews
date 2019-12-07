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
              <Photo src={props.photos[0].imageUrl} />
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
  // flex-basis: 100%;
  background: transparent;
  color: white;
  align-self: flex-end;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

const Primary = styled.div`
  background: black;
  flex-basis: 0;
  flex-grow: 2;
  align-items: center;
  justify-content: center;
  // align-self: flex-start;
`;

const PhotoBox = styled.div`
  flex-grow: 1;
  // position:fixed;
  // align-self: flex-end;
  background: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 0;
  // width: 80%;
  // height: auto;
  // top:50%;
  // left:50%;
  // transform: translate(-50%,-50%);
`;

const Photo = styled.img`
  border-radius: 8px;
  max-width: 60%;
  height: auto;
  margin: 2px;
`;

export default Modal;

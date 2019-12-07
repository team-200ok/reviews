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
          <PhotoBox>
            {props.photos.map((item) => <Photo src={item.imageUrl} />)}
          </PhotoBox>
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
`;

const PhotoBox = styled.div`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const Photo = styled.img`
  border-radius: 8px;
  max-width: 40%;
  height: auto;
  margin: 10px;
`;

const Button = styled.button`
  background: transparent;
  color: white;
`;

export default Modal;

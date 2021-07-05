import styled from 'styled-components';

/* modal.module.css */

export const SideWrapper = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 1rem;
  top: 0;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  overflow-y: scroll;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  height: 100vh;
  width: 35%;
`;

export const BackdropWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin: 0 0 0 8px;
  color: #666;
`;

import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `
    ;

export const cicleRotate = styled.div`
.rotate-login {
  animation: ${rotate} 2s linear infinite;
}
`;

export const Loading= styled.div`

width: 100%;
max-width: 100vw;
height: 100%;
min-height: 100vh;

z-index: 2;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

-webkit-backdrop-filter: blur(0.5px);

backdrop-filter: blur(0.5px);
background-color: rgba(250, 250, 250, 0.8);
top: 0;
margin: 0;
padding: 0;
position: absolute;

-webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; 

  body {
    -webkit-backdrop-filter: blur(0.5px);
    backdrop-filter: blur(0.5px);
    background-color: rgba(250, 250, 250, 0.6);
  }
`;
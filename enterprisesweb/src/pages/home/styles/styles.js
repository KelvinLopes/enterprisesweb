import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  max-width: 100vw;
  min-heigth: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  overflow-x: hidden;



  main {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 100vw; 

    
    
    margin-top: 15rem;
    position: relative;
  }

`;

export const Header = styled.header`

  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  justify-content: space-around;
  width: 100%;
  height: 25vh;
  padding: 2rem;
  background-image: linear-gradient(179deg, rgba(238, 76, 119, 1), rgba(14, 5, 49, 78));
 
  img {
    object-fit: contain;
    width: 117.1px;
    height: 28.5px;
    margin: 18px auto;
  }

`;

export const Information = styled.h1`

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  font-family: Roboto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: -0.45px;
  color: #383743;


  width: 34.125rem;
  
  
  @media screen and (max-width:600px) {
    font-size: 1.5em;
 }
`;

import styled, { keyframes, css } from 'styled-components';

export const Container= styled.div`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  width: 100%;
  max-width: 100vw;
  min-heigth: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .card-img {
      left: 0;
      right: 0;
  }

`;


export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 25vh;
  background-image: linear-gradient(179deg, rgba(238, 76, 119, 1), rgba(14, 5, 49, 78));

  position: fixed;
  top: 0;
  z-index: 2;
  
svg {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
`;

export const Form = styled.form`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: auto;
margin: 0 auto;

`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  width: 90%;
  height: 12px;
  margin-top: 35px;
  padding: 10px 25px 15px;
  font-size: 19px;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #fff;
 
  flex: 1 0 auto; 
  outline: none;
  border-bottom: 2px solid #fff !important;
  border-top: none;
  border-left: none;
  border-right: none;
  &::placeholder {
    width: 100%;
    padding: 10px 20px;
    
    opacity: 0.5;
    position: relative;
    color: #eddd;
    font-size: 19px;
    line-height: normal;
    font-family: 'Roboto', sans-serif;
  }
  @media screen and (max-width:600px) {
    width: 80%;
  }
`;

export const Main = styled.main`

 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 40px;
`;


export const Card = styled.section`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 140px;
  margin-bottom: 30px;

  width: 80%;
  heigth: auto;
  background: #f5f5f5;
  border: 1px #fff solid;
  border-radius: 8px;
  padding: 5px;

   @media screen and (max-width:700px) {
    flex-direction: column;
     width: 100%;
  }

`;

export const Description = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 20%;
  text-align: center;
  padding: 5px;
  font-size: 0.8rem;

  h1 {
      color: #1a0e49;
      font-family: 'Roboto', sans-serif;
  }

   @media screen and (max-width:700px) {
   
        width: 100%;
    }
`;
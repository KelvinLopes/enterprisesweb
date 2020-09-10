import styled from 'styled-components';

export const Container= styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Source+Sans+Pro&display=swap');
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    
    .icon-back {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: absolute;
        left: 0;
        margin: 0 30px 0 30px;
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

export const Content= styled.section`

  display: flex;
  width: 80%;
  height: auto;
 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;
  margin: 170px auto;
  background: #fff;
  border-radius: 4px;

  h1 {

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 30px;
    color: #1a0e49;
    font-family: 'Roboto', sans-serif;
  }

  p {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 1.125rem;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #8d8c8c;
      margin: 30px auto;
  }

  img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative !important;
    width: 95%;
    height: 45vh;
    margin: 30px auto;
    border-radius: 4px;
    }

     @media screen and (max-width:600px) {
        width: auto;
  }
  `;

  export const Title = styled.h1`
  
  font-family: Roboto;
  font-size: 2.125rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: right;
  margin-left: 0.8rem;
  
  `;
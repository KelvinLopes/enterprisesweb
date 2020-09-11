import styled from 'styled-components';

export const Container= styled.div`

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  
  width: 100%;
  max-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  position: relative;
  .icon {
    position: relative;
    top: -25px;
  }
  .icon-exclamation-email {
    position: relative;
    top: -55px;
    left: 255px;
    display: none;
  }
  .icon-exclamation-pwd {
      position: relative;
      top: -55px;
      left: 255px;
      display: none;
  }
  .icon-pwd-visible-off {
    position: relative;
    top: -55px;
    left: 255px;
    display: block;
    cursor: pointer;
}

.icon-pwd-visible-on {
  position: relative;
  top: -55px;
  left: 255px;
  display: none;
  cursor: pointer;
}

h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 60px auto;
  width: 18vw;
  height: 3.2vh;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #383743;
}

img {
    margin: 0.4rem auto;
}

p {
  
  width: 60%;
  height: auto;
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.13px;
  text-align: center;
  color: #383743;
}

fieldset {
    width: auto;
    border: 0;
}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
`;

export const Input = styled.input`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  background: none;
  width: 100%;
  height: 12px;
  margin-top: 55px;
  padding: 10px 30px;

  font-size: 19px;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
 
  flex: 1 0 auto; 
  outline: none;
  border-bottom: 1px solid #383743 !important;
  border-top: none;
  border-left: none;
  border-right: none;
  &::placeholder {
    width: 100%;
    padding: 10px 20px;
    
    opacity: 0.5;
    position: relative;
    color: #383743;
    font-size: 19px;
    line-height: normal;
    font-family: 'Roboto', sans-serif;
  }
`;

export const SubmitButton = styled.button`

  display: flex;
  align-content: center;
  justify-content: center;
  flex: 1 0 auto;
  position: relative;

  width: 20.25rem;
  height: 3.3rem;
  border-radius: 3.6px;

  outline: none;
  border: none;
  background: #57bbbc;

  margin: -0.8rem auto;

  &:hover {
    opacity: 0.5;
}
`;

export const TextButton = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin: 0 auto;
position: relative;

h1{

  width: 4.375rem;
  height: 1.5rem;
  margin: 0.8rem auto;

  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;

  color: #fff;
  font-size: 25px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;

}
`;

export const Error = styled.h2`

  display: flex;
  align-content: center;
  justify-content: center;
  flex: 1 0 auto;
  position: relative;
  
  bottom: 1.2rem;
  padding: 1.5rem;

  text-align: center;
  color: #ff0f44;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: -0.09px;
  line-height: 1.60;

  width: 100%;
  height: 7vh;
`;
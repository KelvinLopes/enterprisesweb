import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { login } from '../../services/auth';

import logo from '../../assets/imgs/logo-home.png';

import Loading from '../../component/Load';

import { 
  MdMailOutline,
  MdLockOutline,
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md';

import { Form, Input, Container, SubmitButton, Error, TextButton } from './styles/styles';
import { AiFillExclamationCircle } from 'react-icons/ai';


function Login() {

const history = useHistory();

const [email, setEmail] = useState('testeapple@ioasys.com.br');
const [password, setPassword] = useState('12341234');
const [textError, setTextError] = useState('');
const [loading, setLoading] = useState(false);

function clearErrorMsg() {
        setTextError('');
    }

function showIconPwdOff () {

  const pwdVisibleOn = document.querySelector('.icon-pwd-visible-on');
  const pwdVisibleOff = document.querySelector('.icon-pwd-visible-off');
  const pwd = document.querySelector(".pwd-input");
   
    pwdVisibleOn.style.display = 'none';
    pwdVisibleOff.style.display = 'flex';

    
  if (pwd.type === "text") {
    pwd.type = "password";
  } 
}

function showIconPwdOn() {

  const pwdVisibleOn = document.querySelector('.icon-pwd-visible-on');
  const pwdVisibleOff = document.querySelector('.icon-pwd-visible-off');
  const pwd = document.querySelector(".pwd-input");

    pwdVisibleOn.style.display = 'flex';
    pwdVisibleOff.style.display = 'none';
    
 if (pwd.type === "password") {
    pwd.type = "text";
  } 
}

function showIconExclamationError() {

  const pointExclamationEmail = document.querySelector('.icon-exclamation-email');
  const pointExclamationPwd = document.querySelector('.icon-exclamation-pwd');
  const pwdVisibleOn = document.querySelector('.icon-pwd-visible-on');
  const pwdVisibleOff = document.querySelector('.icon-pwd-visible-off');


    pointExclamationEmail.style.display = 'flex';
    pointExclamationPwd.style.display = 'flex';
    pwdVisibleOn.style.display = 'none';
    pwdVisibleOff.style.display = 'none';
  
  setTimeout(() => {
        pointExclamationEmail.style.display = 'none';
        pointExclamationPwd.style.display = 'none';
        pwdVisibleOff.style.display = 'block';
  },5000);

}

async function handleSingIn(event) {
    event.preventDefault();
    setLoading(true);

  try {
    const response = await api.post('users/auth/sign_in', {
        email,
        password,
     })

   
    login(
      response.headers['access-token'],
      response.headers['client'],
      response.headers['uid'],
    );
    
    history.push('/home');

  }catch(error) {
      showIconExclamationError();
      setTextError('Credenciais informadas são invalidas, tente novamente');
      setTimeout(() => {
          clearErrorMsg();
      }, 5000);
  }finally {
      setLoading(false);
  }
}
    return(
        <>
        <Container>
        <main>
            <Form onSubmit={handleSingIn}>
                <img src={logo} alt="logo" />
                 <h1>Bem vindo ao Empresas</h1>
                <p>
                Lorem ipsum dolor sit amet,
                contetur adipiscing elit. 
                Nunc accumsan.
                </p>

                { loading ? ( <Loading /> ) : ( <></> ) }

                <fieldset>
                    <Input 
                        name="email"
                        label="Email"
                        type="email"
                        value={email} onChange={(event) => {setEmail(event.target.value)}}
                        placeholder="Email"
                    />
                    <MdMailOutline size={25} color="#ee4c77"  className="icon"/>

                    <AiFillExclamationCircle  
                        size={25} 
                        color="#D10011" 
                        className="icon-exclamation-email"
                        />

                    <Input className="pwd-input"
                        name="password"
                        label="Password"
                        type="password"
                        value={password} onChange={(event) => {setPassword(event.target.value)}}
                        placeholder="Senha"
                    />
                    <MdLockOutline size={25} color="#ee4c77" className="icon"/>

                    <AiFillExclamationCircle  
                        size={25} 
                        color="#D10011" 
                        className="icon-exclamation-pwd"
                    />

                    <MdVisibilityOff
                        onClick={() => showIconPwdOn()}
                        size={25}
                        color="#383743"
                        className="icon-pwd-visible-off"
                    />

                    <MdVisibility
                        onClick={() => showIconPwdOff()}
                        size={25}
                        color="#383743"
                        className="icon-pwd-visible-on"
                    />
                </fieldset>

                <fieldset>
                    <SubmitButton type="submit">
                        <TextButton><h1>Entrar</h1></TextButton>
                    </SubmitButton>
                </fieldset>
            </Form>
            <div> 
                <Error>{textError}</Error>
            </div>
        </main>
        </Container>
        </>
    );
}

export default Login;
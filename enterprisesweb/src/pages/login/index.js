import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { login } from '../../services/auth';

import logo from '../../assets/imgs/logo-home.png';

import { 
  MdMailOutline,
  MdLockOutline,
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md';

import { Form, Input, Container, SubmitButton, Error, TextButton } from './styles/styles';


function Login() {

const history = useHistory();

const [email, setEmail] = useState('testeapple@ioasys.com.br');
const [password, setPassword] = useState('12341234');
const [textError, setTextError] = useState('');

function clearErrorMsg() {
        setTextError('');
    }

async function handleSingIn(event) {
    event.preventDefault();

  try {
    const response = await api.post('users/auth/sign_in', {
        email,
        password,
     },)

   
    login(
      response.headers['access-token'],
      response.headers['client'],
      response.headers['uid'],
    );
    
    history.push('/home');

  }catch(error) {
      setTextError('Credenciais informadas são invalidas, tente novamente');
      setTimeout(() => {
          clearErrorMsg();
      }, 5000);
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

                <fieldset>
                    <Input 
                        name="email"
                        label="Email"
                        type="email"
                        value={email} onChange={(event) => {setEmail(event.target.value)}}
                        placeholder="Email"
                    />

                    <Input 
                        name="password"
                        label="Password"
                        type="password"
                        value={password} onChange={(event) => {setPassword(event.target.value)}}
                        placeholder="Senha"
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
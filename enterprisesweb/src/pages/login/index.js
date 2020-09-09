import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { login } from '../../services/auth';


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
        <main>
            <form onSubmit={handleSingIn}>
                <fieldset>
                    <legend>Email:</legend>
                    <input 
                        name="email"
                        label="Email"
                        type="email"
                        value={email} onChange={(event) => {setEmail(event.target.value)}}
                    />

                    <legend>Senha:</legend>
                    <input 
                        name="password"
                        label="Password"
                        type="password"
                        value={password} onChange={(event) => {setPassword(event.target.value)}}
                    />
                </fieldset>

                <fieldset>
                    <button type="submit">
                        Entrar
                    </button>
                </fieldset>
            </form>
            <div id="errorMsg"> 
                <span>{textError}</span>
            </div>
        </main>
    );
}

export default Login;
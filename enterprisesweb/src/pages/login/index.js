import React, { useState } from 'react';

import { useHistory, withRouter } from 'react-router-dom';

import api from '../../services/api';

import { login } from '../../services/auth';


function Login() {

const history = useHistory();

const [email, setEmail] = useState('testeapple@ioasys.com.br');
const [password, setPassword] = useState('12341234');

async function handleSingIn(event) {
    event.preventDefault();

  
    const response = await api.post('users/auth/sign_in', {
        email,
        password,
     },)

     if(!email || !password) {
         console.log('Dados invalidos')
     }

    login(
      response.headers['access-token'],
      response.headers['client'],
      response.headers['uid'],
    );
    
    history.push('/home');

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
        </main>
    );
}

export default Login;
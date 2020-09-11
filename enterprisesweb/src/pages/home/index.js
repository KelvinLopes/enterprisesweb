import React from 'react';

import { Link } from 'react-router-dom';

import { MdSearch, MdExitToApp } from 'react-icons/md';

import logo from '../../assets/imgs/logo-nav.png';

import { Header, Information, Container } from './styles/styles';

import { logout } from '../../services/auth';

export default function Home() {

  async function  handleLogout() {

  logout();
  await window.location.reload()
}

    return (
    <>
    <Container>
        <Header>
            <MdExitToApp 
                color="#fff"
                size={35}
                title="Deslogar"
                cursor="pointer"
                onClick={() => handleLogout()}
              />

            <img src={logo} alt="logo" className="logo" />
                <Link to="enterprises/list">  
                <MdSearch 
                    color="#fff"
                    size={35}
                />
                </Link>
            </Header>
        <main>
         <Information>Clique na busca para iniciar</Information>
        </main>
    </Container>
    </>
    );
}
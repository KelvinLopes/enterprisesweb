import React from 'react';

import { Link } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';

import logo from '../../assets/imgs/logo-nav.png';

import { Header, Information, Container } from './styles/styles';

export default function Home() {

    return (
    <>
    <Container>
        <Header>
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
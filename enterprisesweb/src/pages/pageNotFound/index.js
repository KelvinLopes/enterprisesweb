import React from 'react';

import { Link } from 'react-router-dom';

import {Container, Content, Header, Title } from './styles/styles';

import { MdArrowBack } from 'react-icons/md';

import ImgPageNotFound from './../../assets/imgs/error404.png';

export default function PageNotFound() {

    return (
        <>
        <Header> 
            <>
           <Link to='/enterprises/list'>
            <MdArrowBack className="icon-back"
              size={25}
              color="#fff"
              cursor="pointer"
              />
            </Link>
            <Title>Página não encontrada</Title>
          </> 
        </Header>

            <Container>
            <main>          
                <Content>
                    <img src={ImgPageNotFound} alt="Página não encontrada" />
                    <p>Essa página não existe ou foi removida.</p>
                </Content>
            </main>
            </Container>
        </>
    );
}
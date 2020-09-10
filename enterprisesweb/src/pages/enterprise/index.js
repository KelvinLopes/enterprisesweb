import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import { getToken, getClient, getUid } from '../../services/auth';

import { Link, useParams } from 'react-router-dom';

import {Container, Content, Header, Title } from './styles/styles';

import { MdArrowBack } from 'react-icons/md';

export default function Enterprise() {

const [enterprises, setEnterprises] = useState([]);

const { id } = useParams();

useEffect(() =>  {

  async function renderEnterprises() {

    const response = await api.get(`enterprises/${id}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json',
      'access-token': getToken(),
      'client': getClient(),
      'uid': getUid(), 
      }});

    const data = response.data.enterprise;

    setEnterprises(data);

}
  renderEnterprises();

}, [id]);

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
            <Title>{enterprises.enterprise_name}</Title>
          </> 
        </Header>

            <Container>
            <main>          
                <Content>
                    <img src={`https://empresas.ioasys.com.br${enterprises.photo}`} alt={enterprises.enterprise_name} />
                    <h1>{enterprises.enterprise_name}</h1>
                    <p>{enterprises.description}</p>
                </Content>
            </main>
            </Container>
        </>
    );
}
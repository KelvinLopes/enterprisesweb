import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import { getToken, getClient, getUid } from '../../services/auth';

import { Link, useParams } from 'react-router-dom';

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
        <main>          
            <div>
                <img src={`https://empresas.ioasys.com.br${enterprises.photo}`} alt={enterprises.enterprise_name} />
                <h1>{enterprises.enterprise_name}</h1>
                <p>{enterprises.description}</p>
                <p>{enterprises.city}</p>
                <p>{enterprises.country}</p>
            </div>
        </main>
    );
}
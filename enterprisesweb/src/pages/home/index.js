import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import { getToken, getClient, getUid } from '../../services/auth';

import { Link } from 'react-router-dom';

import Input from '../../component/Input';

export default function Home() {

const [enterprises, setEnterprises] = useState([]);


useEffect(() =>  {

  async function RenderEnterprises() {

    const response = await api.get('enterprises',
      { method: 'GET', headers: { 'Content-Type': 'application/json',
      'access-token': getToken(),
      'client': getClient(),
      'uid': getUid(), 
      }});

    const data = response.data.enterprises.map(enterprise => ({
      ...enterprise,
    }));
  setEnterprises(data);

}
  RenderEnterprises()

}, []);

    return (
        <>
        <Input /> 
            
        <main>
            
            { enterprises.map(enterprise => (
                    <div key={enterprise.id}>
                        <img src={`https://empresas.ioasys.com.br${enterprise.photo}`} alt={enterprise.enterprise_name} />
                        <h1>{enterprise.enterprise_name}</h1>
                        <p>{enterprise.city}</p>
                        <p>{enterprise.country}</p>
                            <Link
                            to={`/enterprise/${enterprise.id}`}
                          >
                              <h1>{enterprise.enterprise_name}</h1>
                          </Link>
                    </div>
                ))}
        </main>
    </>
    );
}
import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { getToken, getClient, getUid } from '../../services/auth';

import { Input, Container, Header, Form, Main, Card, Description} from './styles/styles'

export default function FilteringEnterprises() {

  const [searchTerm, setSearchTerm] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const [textError, settextError] = useState('Sua busca não retornou resultado.');
  
  const history = useHistory();

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  }

    useEffect(() => {
        async function FilterEnterprises() {

    try{
       const response = await api.get('enterprises',
        { method: 'GET', headers: { 'Content-Type': 'application/json',
        'access-token': getToken(),
        'client': getClient(),
        'uid': getUid(), 
        }});

        const data = response.data.enterprises.map(enterprise => ({
      ...enterprise,
    }));
    
        const results =
            await data.filter(enterprise => (
            enterprise.enterprise_name.includes(searchTerm)
            ||
            enterprise.enterprise_name.toLowerCase().includes(searchTerm)
            ||
            enterprise.enterprise_name.toUpperCase().includes(searchTerm)

            )
        );

        setSearchResults(data);
        setSearchResults(results);

        }catch(error){
            settextError('Sua busca não retornou resultado.');
        }
    }
        FilterEnterprises();
    }, [searchTerm]);


    async function handleSubmit(event) {
        event.preventDefault();
        history.push(`/enterprises/list`);
    }    

    return (

        <Container>
        <Header>    
        <Form onSubmit={handleSubmit}>
            <Input
            className="input"
            type="text"
            placeholder="Procure por uma empresa"
            value={searchTerm}
            onChange={handleInputChange}
            />

            <button type="submit">Pesquisar</button>
        </Form>  
        </Header>

         <Main>
            { 
            textError ? 
            (
                 searchResults.map(enterprise => (
                        <Card key={enterprise.id}>
                            <img 
                            className="card-img"
                            src={`https://empresas.ioasys.com.br${enterprise.photo}`} 
                            alt={enterprise.enterprise_name} />
                            <Description>
                                <Link
                                    to={`/enterprise/${enterprise.id}`}
                                >
                                    <h1>{enterprise.enterprise_name}</h1>
                                </Link>
                                <p>{enterprise.city}</p>
                                <p>{enterprise.country}</p>
                            </Description>
                        </Card>
                    ))
            ) : ( <div>{textError}</div> )  }
            </Main>
        </Container>    
    );
}
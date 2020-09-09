import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { getToken, getClient, getUid } from '../../services/auth';

export default function FilteringEnterprises() {

  const [searchTerm, setSearchTerm] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  }

    useEffect(() => {
        async function FilterEnterprises() {

       const response = await api.get(`enterprises?enterprise_types=1&name=${searchTerm}`,
        { method: 'GET', headers: { 'Content-Type': 'application/json',
        'access-token': getToken(),
        'client': getClient(),
        'uid': getUid(), 
        }});

      const data = response.data.enterprises;


        const results =
            data.filter(enterprise => (
            enterprise.enterprise_name.includes(searchTerm)
            ||
            enterprise.enterprise_name.toLowerCase().includes(searchTerm)
            ||
            enterprise.enterprise_name.toUpperCase().includes(searchTerm)

            )
        );
        setSearchResults(data);
        setSearchResults(results);

        return response.data;
        }
        FilterEnterprises();
    }, [searchTerm]);


    return (
        <main>
        <form>
            <input
            className="input"
            type="text"
            placeholder="Procure por uma empresa"
             value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}}
            />

            <button type="submit">Pesquisar</button>
        </form>    
                { searchResults.map(enterprise => (
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
    );
}
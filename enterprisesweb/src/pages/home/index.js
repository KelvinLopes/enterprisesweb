import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {

    return (
    <>
        <main>
        <Link to="enterprises/list">Pesquisar</Link>
         <h1>Digite para começar</h1>
        </main>
    </>
    );
}
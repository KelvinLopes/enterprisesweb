import React from 'react';

import { Loading } from './styles/styles';
import { FaCircleNotch } from 'react-icons/fa';


export default function Load(){
     return ( 
      <>
      <Loading>
      <FaCircleNotch
        color="#57bbbc"
        size={30}
        className="rotate-login"
         />
      </Loading>
      </>
    );
  }
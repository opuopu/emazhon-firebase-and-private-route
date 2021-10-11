import React from 'react';
import { createContext } from 'react';
import Usefirebase from '../hooks/Usefirebase';

export const Authcontext = createContext()
  const Authprovider = ({children}) => {
      const firebase = Usefirebase()
    return (
    <Authcontext.Provider value={firebase}>
{children}
        </Authcontext.Provider>
    );
};

export default Authprovider;
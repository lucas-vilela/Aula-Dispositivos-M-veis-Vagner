import React, {useState} from 'react';
import {createContext} from 'react';
//import {getAuth} from 'firebase/auth';
// import firestore from '@react-native-firebase/firestore';

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthUserContext.Provider value={{user, setUser}}>
      {children}
    </AuthUserContext.Provider>
  );
};

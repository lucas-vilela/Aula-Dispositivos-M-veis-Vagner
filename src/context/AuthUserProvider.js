import React, {useState} from 'react';
import {createContext} from 'react';
//import {getAuth} from 'firebase/auth';
// import firestore from '@react-native-firebase/firestore';

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  // const [data, setData] = useState(null);

  // const auth = getAuth();
  // setUser(auth.currentUser);

  // const getUser = () => {
  //   const unsubscribe = firestore()
  //     .collection('users')
  //     .onSnapshot(
  //       querySnapshot => {
  //         let d = [];
  //         querySnapshot.forEach(doc => {
  //           //console.log(doc.id, ' => ', doc.data());
  //           const user = {
  //             id: doc.id,
  //             nome: doc.data().nome,
  //             cel: doc.data().cel,
  //             email: doc.data().email,
  //           };
  //           d.push(user);
  //         });
  //         setData(d);
  //         //setLoading(false);
  //       },
  //       e => {
  //         console.log('Home, getUsers: ' + e);
  //       },
  //     );
  //   return unsubscribe;
  // };

  return (
    <AuthUserContext.Provider value={{user, setUser}}>
      {children}
    </AuthUserContext.Provider>
  );
};

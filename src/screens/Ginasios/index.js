import React, {useContext, useEffect, useState} from 'react';
import {Container, FlatList} from './styles';
import {StatusBar} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import Item from './Item';
import Loading from '../../components/Loading';
import AddFloatButton from '../../components/AddFloatButton';
import Esportes from '../Esportes';
import {GinasioContext} from '../../context/GinasioProvider';

const Ginasios = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {ginasios} = useContext(GinasioContext);

  useEffect(() => {
    setData(ginasios);

    // const unsubscribe = getGinasios();

    return () => {
      //console.log('ao desmontar o componente Home ');
      // unsubscribe();
    };
  }, [ginasios]);

  // const getGinasios = () => {
  //   const unsubscribe = firestore()
  //     .collection('ginasios')
  //     .onSnapshot(
  //       querySnapshot => {
  //         let d = [];
  //         querySnapshot.forEach(doc => {
  //           //console.log(doc.id, ' => ', doc.data());
  //           const val = {
  //             uid: doc.id,
  //             nome: doc.data().nome,
  //             cep: doc.data().cep,
  //             telefone: doc.data().telefone,
  //             distancia: doc.data().distancia,
  //             endereco: doc.data().endereco,
  //           };
  //           d.push(val);
  //         });
  //         setData(d);
  //         setLoading(false);
  //       },
  //       e => {
  //         console.log('Ginasios, getGinasios: ' + e);
  //       },
  //     );
  //   return unsubscribe;
  // };

  const routeGinasio = item => {
    //setLoading(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Ginasio',
        params: {ginasio: item},
      }),
    );
    //setLoading(false);
  };

  const routeGinasioMap = item => {
    //setLoading(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'GinasioMap',
        params: {ginasio: item},
      }),
    );
    //setLoading(false);
  };



  const routeAddGinasio = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Ginasio',
        params: {ginasio: null},
      }),
    );
  };

  // const renderItem = ({item}) => (
  //   <Item item={item} onPress={() => routeGinasioMap(item)} />
  // );

  const renderItem = ({item}) => (
    <Item item={item} onPress={() => routeGinasio(item)} />
  );

  return (
    <Container>
      <Esportes />
      <FlatList
        data={data}
        //horizontal
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.uid}
      />
      <AddFloatButton onClick={routeAddGinasio} />
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Ginasios;

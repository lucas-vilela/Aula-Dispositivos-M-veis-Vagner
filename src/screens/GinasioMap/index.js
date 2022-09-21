import React, {useContext, useEffect, useState} from 'react';
import {Container, Text} from './styles';
import {StatusBar, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import {GinasioContext} from '../../context/GinasioProvider';

const GinasioMap = ({navigation, route}) => {
  const [markers, setMarkers] = useState([]);
  const {ginasios} = useContext(GinasioContext);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  // const [uid, setUid] = useState('');
  // const [nome, setNome] = useState('');
  // const [telefone, setTelefone] = useState('');

  useEffect(() => {
    //Nesse useEffect eu pego as coordenadas para regiao inicial do item agendamento
    // setUid(route.params.ginasio.uid);
    // setNome(route.params.ginasio.ginasio);
    // setTelefone(route.params.ginasio.endereco);
    setLatitude(Number(route.params.ginasio.latitude));
    setLongitude(Number(route.params.ginasio.longitude));
    // console.log(nome);
  }, []);

  let coords = {latitude: latitude, longitude: longitude};

  useEffect(() => {
    // Nesse useEffect eu trago todos pontos do Provider de Ginásios
    let data = [];
    ginasios.map(gin => {
      data.push({
        key: gin.latitude,
        coords: {
          latitude: Number(gin.latitude),
          longitude: Number(gin.longitude),
        },
        title: gin.nome,
        description: gin.telefone,
        imagem: require('../../assets/images/185040_map_pin_icon.svg'),
      });
    });
    console.log(data);
    setMarkers(data);
  }, [ginasios]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        // mapType={mapType}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0121,
        }}>
        {markers.map(marker => (
          <Marker
            key={marker.key}
            coordinate={marker.coords}
            title={marker.title}
            description={marker.description}
            image={marker.imagem}
          />
        ))}
        {/* <Marker
          key={uid}
          coordinate={coords}
          title={nome}
          description={telefone}
          image={require('../../assets/images/pin_map_gin.png')}
        /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GinasioMap;

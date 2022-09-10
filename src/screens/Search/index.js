import React, {useContext, useEffect, useState} from 'react';
import {Container, FlatList} from './styles';
import {
  StatusBar,
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';

import {EsporteContext} from '../../context/EsporteProvider';
import ItemGin from './ItemGin';
import ItemEsp from './ItemEsp';
import Loading from '../../components/Loading';
import AddFloatButton from '../../components/AddFloatButton';
import {COLORS} from '../../assets/colors';
import {color} from 'react-native-reanimated';

const Ginasios = ({navigation}) => {
  const [data, setData] = useState([]);
  const [dataEsp, setDataEsp] = useState([]);
  const [originalData, setoriginalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {esportes} = useContext(EsporteContext);
  const [anoSelecionado, setAnoSelecionado] = useState(0);
  const [mesSelecionado, setMesSelecionado] = useState(0);
  const [diaSelecionado, setDiaSelecionado] = useState(0);
  const [horaSelecionado, setHoraSelecionado] = useState(null);
  const [listaDias, setListaDias] = useState([]);
  const [listaHoras, setListaHoras] = useState([]);

  useEffect(() => {
    let today = new Date();
    setAnoSelecionado(today.getFullYear());
    setMesSelecionado(today.getMonth());
    setDiaSelecionado(today.getDate());
  }, []);

  useEffect(() => {
    let diasNoMes = new Date(anoSelecionado, mesSelecionado + 1, 0).getDate();
    let newlistaDias = [];

    for (let i = 1; i <= diasNoMes; i++) {
      let d = new Date(anoSelecionado, mesSelecionado, i);
      let ano = d.getFullYear();
      let mes = d.getMonth() + 1;
      let dia = d.getDate();
      mes = mes < 10 ? '0' + mes : mes;
      dia = dia < 10 ? '0' + dia : dia;
      //let DataSel = ano + '-' + mes + '-' + dia; para quando for comparar com dias disponiveis da API
      //let disponivel = user.disponivel.filter(e=>e.date ===DataSel);

      newlistaDias.push({
        //status: disponivel.lenght > 0 ? true : false;
        diaSemana: dias[d.getDay()],
        numero: i,
      });
    }

    // let diaAtual = new Date().getDate();
    setListaDias(newlistaDias);
    setListaHoras([]);
    // setDiaSelecionado(diaAtual);
    setHoraSelecionado(0);
  }, [mesSelecionado, anoSelecionado]);

  useEffect(() => {
    setDataEsp(esportes);
  }, [esportes]);

  useEffect(() => {
    //setData(ginasios);

    const unsubscribe = getGinasios();

    return () => {
      //console.log('ao desmontar o componente Home ');
      unsubscribe();
    };
  }, []);

  const getGinasios = () => {
    const unsubscribe = firestore()
      .collection('ginasios')
      .onSnapshot(
        querySnapshot => {
          let d = [];
          querySnapshot.forEach(doc => {
            //console.log(doc.id, ' => ', doc.data());
            const val = {
              uid: doc.id,
              nome: doc.data().nome,
              cep: doc.data().cep,
              telefone: doc.data().telefone,
              distancia: doc.data().distancia,
              endereco: doc.data().endereco,
            };
            d.push(val);
          });
          setData(d);
          setoriginalData(d);
          setLoading(false);
        },
        e => {
          console.log('Ginasios, getGinasios: ' + e);
        },
      );
    return unsubscribe;
  };

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

  const routeAddGinasio = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Ginasio',
        params: {ginasio: null},
      }),
    );
  };

  const renderItemGin = ({item}) => (
    <ItemGin item={item} onPress={() => routeGinasio(item)} />
  );

  const renderItemEsp = ({item}) => (
    <ItemEsp item={item} onPress={() => alert(item.modalidade)} />
  );

  const search = termo => {
    let array = JSON.parse(JSON.stringify(originalData)); // aqui é feito o stringify e o parse pra desatrelar os arrays
    setData(array.filter(d => d.nome.includes(termo)));
  };

  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const handleLeftDateClick = () => {
    let montarData = new Date(anoSelecionado, mesSelecionado, 1);
    montarData.setMonth(montarData.getMonth() - 1);
    setAnoSelecionado(montarData.getFullYear());
    setMesSelecionado(montarData.getMonth());
    setDiaSelecionado(1);
  };

  const handleRightDateClick = () => {
    let montarData = new Date(anoSelecionado, mesSelecionado, 1);
    montarData.setMonth(montarData.getMonth() + 1);
    setAnoSelecionado(montarData.getFullYear());
    setMesSelecionado(montarData.getMonth());
    setDiaSelecionado(1);
  };

  return (
    <Container>
      <TextInput
        onChangeText={s => search(s)}
        style={styles.input}
        placeholder="Pesquisar ginásio"
        placeholderTextColor={'#A4A4A4'}
      />
      <Icon name="search-outline" size={20} color="#FFF" style={styles.icon} />
      <View style={styles.esportesScrollView}>
        <FlatList
          data={dataEsp}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItemEsp}
          keyExtractor={item => item.uid}
        />
      </View>

      <View style={styles.areaDatas}>
        <View style={styles.areaMesAno}>
          <TouchableOpacity
            style={styles.prevButton}
            onPress={handleLeftDateClick}>
            <Icon name="chevron-back" size={25} color={'#FFF'} />
          </TouchableOpacity>
          <View style={styles.mesAno}>
            <Text style={styles.textMesAno}>
              {meses[mesSelecionado]} {anoSelecionado}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleRightDateClick}>
            <Icon name="chevron-forward" size={25} color={'#FFF'} />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.areaDiasSemana}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {listaDias.map((item, key) => (
            <TouchableOpacity
              style={styles.btnDia}
              key={key}
              onPress={() => {
                setDiaSelecionado(item.numero);
              }}>
              <Text
                style={{
                  fontFamily: 'Ubuntu-Bold',
                  color:
                    item.numero === diaSelecionado
                      ? COLORS.primaryDark
                      : COLORS.white,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingVertical: 10,
                  paddingLeft: 13,
                  paddingRight: 10,
                  borderColor: COLORS.primaryLight,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    item.numero === diaSelecionado
                      ? COLORS.alert
                      : COLORS.primaryDark,
                }}>
                {item.numero}
              </Text>
              <Text style={styles.diaSemana}>{item.diaSemana}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={data}
        //horizontal
        style={styles.ginasiosFlat}
        showsVerticalScrollIndicator={false}
        renderItem={renderItemGin}
        keyExtractor={item => item.uid}
      />
      {/* <AddFloatButton onClick={routeAddGinasio} /> */}
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.primary,
    width: '100%',
    paddingHorizontal: 20,
    fontFamily: 'Ubuntu-Regular',
    fontSize: 18,
    color: COLORS.white,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  esportesScrollView: {
    width: '90%',
    marginTop: 20,
    height: 80,
    paddingVertical: 5,
  },
  ginasiosFlat:{
    width: '90%',
  },
  areaDatas: {
    alignSelf: 'center',
    marginVertical: 20,
    fontFamily: 'Ubuntu-Regular',
    width: '90%',
    flexDirection: 'column',
  },
  areaMesAno: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textMesAno: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    color: COLORS.white,
  },
  prevButton: {
    marginRight: 20,
  },
  nextButton: {
    marginLeft: 20,
  },
  areaDiasSemana: {
    padding: 2,
  },
  diaSemana: {
    fontFamily: 'Ubuntu-Bold',
    color: COLORS.white,
  },
  diaNumero: {
    fontFamily: 'Ubuntu-Bold',
    color: COLORS.white,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    borderColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDia: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // padding: 10,
  },
});

export default Ginasios;

import React, {Component} from 'react';
import {View, StatusBar, Image, Text, StyleSheet} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export class CenaEmpresas extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#ec7148" />
        <BarraNavegacao
          voltar
          navigator={this.props.navigator}
          colorBack="#ec7148"
        />

        <View style={style.title}>
          <Image source={detalheEmpresa} />
          <Text style={style.titleText}>A Empresa</Text>
        </View>

        <View style={style.empresa}>
          <Text style={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            explicabo eos officiis natus voluptatibus, vero distinctio{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  titleText: {
    margin: 10,
    fontSize: 25,
    color: '#ec7148',
  },
  empresa: {
    marginLeft: 20,
  },
  text: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 18,
  },
});

export default CenaEmpresas;

import React, {Component} from 'react';
import {View, StatusBar, Image, Text, StyleSheet} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export class CenaClientes extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#b9c941" />
        <BarraNavegacao
          voltar
          navigator={this.props.navigator}
          colorBack="#b9c941"
        />

        <View style={style.title}>
          <Image source={detalheClientes} />
          <Text style={style.titleText}>Nossos Clientes</Text>
        </View>

        <View style={style.clientes}>
          <Image source={cliente1} />
          <Text style={style.text}>Lorem ipsum dolor sit amet </Text>
        </View>

        <View style={style.clientes}>
          <Image source={cliente2} />
          <Text style={style.text}>Lorem ipsum dolor sit amet </Text>
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
    color: '#b9c941',
  },
  clientes: {
    padding: 20,
    paddingLeft: 30,
  },
  text: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 18,
  },
});

export default CenaClientes;

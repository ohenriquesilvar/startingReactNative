import React, {Component} from 'react';
import {View, StatusBar, Image, Text, StyleSheet} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheServico = require('../imgs/detalhe_servico.png');

export class CenaServico extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#19d1c8" />
        <BarraNavegacao
          voltar
          navigator={this.props.navigator}
          colorBack="#19d1c8"
        />

        <View style={style.title}>
          <Image source={detalheServico} />
          <Text style={style.titleText}>Nosso Serviços</Text>
        </View>

        <View style={style.contatos}>
          <Text style={style.text}>. Consultoria</Text>
          <Text style={style.text}>. Serviços</Text>
          <Text style={style.text}>. Processos</Text>
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
    color: '#19d1c8',
  },
  servico: {
    marginLeft: 20,
  },
  text: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
});

export default CenaServico;

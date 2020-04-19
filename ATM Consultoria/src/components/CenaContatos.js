import React, {Component} from 'react';
import {View, StatusBar, Image, Text, StyleSheet} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export class CenaContatos extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#61bd8c" />
        <BarraNavegacao
          voltar
          navigator={this.props.navigator}
          colorBack="#61bd8c"
        />

        <View style={style.title}>
          <Image source={detalheContatos} />
          <Text style={style.titleText}>Contatos</Text>
        </View>

        <View style={style.contatos}>
          <Text style={style.text}>TEL: (37) 1234-1234</Text>
          <Text style={style.text}>CEL: (37 91234-1234)</Text>
          <Text style={style.text}>EMAIL: contato@atmconsultoria.com</Text>
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
    color: '#61bd8c',
  },
  contatos: {
    marginLeft: 20,
  },
  text: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 18,
  },
});

export default CenaContatos;

import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export class CenaPrincipal extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#ccc" />
        <BarraNavegacao />

        <View style={style.centro}>
          <Image source={logo} />

          <View style={style.cima}>
            <TouchableHighlight
              underlayColor={'#b9c941'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({id: 'cliente'});
              }}>
              <Image source={menuCliente} style={style.itens} />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#61bd8c'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({id: 'contato'});
              }}>
              <Image source={menuContato} style={style.itens} />
            </TouchableHighlight>
          </View>

          <View style={style.baixo}>
            <TouchableHighlight
              underlayColor={'#ec7148'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({id: 'empresa'});
              }}>
              <Image source={menuEmpresa} style={style.itens} />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#19d1c8'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({id: 'servico'});
              }}>
              <Image source={menuServico} style={style.itens} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  centro: {
    marginTop: 30,
    padding: 30,
    alignItems: 'center',
  },
  cima: {
    marginTop: 20,
    flexDirection: 'row',
  },
  baixo: {
    flexDirection: 'row',
  },
  itens: {
    margin: 20,
  },
});

export default CenaPrincipal;

import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';

const btn_voltar = require('../imgs/btn_voltar.png');

export class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar) {
      return (
        <View
          style={[style.barraTitulo, {backgroundColor: this.props.colorBack}]}>
          <TouchableHighlight
            underlayColor={this.props.colorBack}
            activeOpacity={0.3}
            onPress={() => {
              this.props.navigator.pop();
            }}>
            <Image source={btn_voltar} />
          </TouchableHighlight>
          <Text style={style.titulo}>ATM Consultoria</Text>
        </View>
      );
    }

    return (
      <View style={style.barraTitulo}>
        <Text style={style.titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#ccc',
    padding: 10,
    height: 60,
    flexDirection: 'row',
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default BarraNavegacao;

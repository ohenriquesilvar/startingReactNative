import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {
  constructor(props) {
    super(props);

    this.state = {resultado: ''};
  }

  componentWillMount() {
    const random = Math.floor(Math.random() * 2);
    let caraoucoroa = '';

    if (random === 0) {
      caraoucoroa = 'cara';
    } else {
      caraoucoroa = 'coroa';
    }

    this.setState({resultado: caraoucoroa});
  }

  render() {
    if (this.state.resultado === 'cara') {
      return (
        <View style={style.resultado}>
          <Image source={cara} />
        </View>
      );
    } else {
      return (
        <View style={style.resultado}>
          <Image source={coroa} />
        </View>
      );
    }
  }
}

const style = StyleSheet.create({
  resultado: {
    flex: 1,
    backgroundColor: '#61bd8c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

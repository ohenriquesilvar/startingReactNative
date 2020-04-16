/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: '',
    };
  }

  jokenpo(escolhaUsuario) {
    var random = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    switch (random) {
      case 0:
        escolhaComputador = 'pedra';
        break;
      case 1:
        escolhaComputador = 'papel';
        break;
      case 2:
        escolhaComputador = 'tesoura';
        break;
    }

    var resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você Ganhou';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Computador Ganhou';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Computador ganhou';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Ganhou';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Computador Ganhou';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado,
    });
  }

  render() {
    return (
      <View>
        <Topo />

        <View style={styles.central}>
          <View style={styles.botton}>
            <Button
              title="Pedra"
              onPress={() => {
                this.jokenpo('pedra');
              }}
            />
          </View>
          <View style={styles.botton}>
            <Button
              title="Papel"
              onPress={() => {
                this.jokenpo('papel');
              }}
            />
          </View>
          <View style={styles.botton}>
            <Button
              style
              title="Tesoura"
              onPress={() => {
                this.jokenpo('tesoura');
              }}
            />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador="Computador" />
          <Icone escolha={this.state.escolhaUsuario} jogador="Você" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  central: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  botton: {
    width: 90,
  },
  palco: {
    alignItems: 'center',
    marginTop: 10,
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
});

export default App;

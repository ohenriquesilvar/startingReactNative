/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Style = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#538530',
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 20,
  },
  textBotton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const pressButton = () => {
  var random = Math.random();
  random = Math.floor(random * 5);
  var frases = Array();
  frases[0] = 'Frase A';
  frases[1] = 'Frase B';
  frases[2] = 'Frase C';
  frases[3] = 'Frase D';
  frases[4] = 'Frase E';

  var escolhida = frases[random];
  Alert.alert(escolhida);
};

const App: () => React$Node = () => {
  const {principal, botao, textBotton} = Style;
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />

      <TouchableOpacity style={botao} onPress={pressButton}>
        <Text style={textBotton}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

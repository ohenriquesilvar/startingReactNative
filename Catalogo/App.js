import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ListaItens from './src/components/ListaItens';

class App extends Component {
  render() {
    return (
      <View>
        <ListaItens />
      </View>
    );
  }
}

export default App;

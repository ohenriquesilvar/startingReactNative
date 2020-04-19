import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';

import BarraNavegacao from './src/components/BarraNavegacao';

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#ccc" /> 
        <BarraNavegacao />
      </View>
    );
  }
}

export default App;

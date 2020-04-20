import React from 'react';
import {View} from 'react-native';
import Visor from './Visor';

const Resultado = props => (
  <View>
    <Visor resultado={props.resultado} />
  </View>
);
export {Resultado};

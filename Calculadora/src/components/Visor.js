import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default props => (
  <View style={styles.visor}>
    <TextInput
      style={styles.visorTxt}
      placeholder="Resultado"
      editable={false}
      value={props.resultado}
    />
  </View>
);

const styles = StyleSheet.create({
  visor: {
    height: 100,
  },
  visorTxt: {
    fontSize: 30,
  },
});

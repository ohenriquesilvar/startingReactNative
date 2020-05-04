import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default props => (
  <ImageBackground
    style={styles.image}
    source={require('../imgs/original.png')}>
    <View style={styles.principal}>
      <View style={styles.logo}>
        <Text style={styles.txtlogo}>Seja Bem-Vindo</Text>
        <Image source={require('../imgs/boas.png')} />
      </View>
      <View style={{flex: 1}}>
        <Button title="Fazer Login" onPress={() => Actions.login()} />
      </View>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  image: {flex: 1, width: null},
  principal: {flex: 1, padding: 15},
  logo: {flex: 2, justifyContent: 'center', alignItems: 'center'},
  txtlogo: {fontSize: 20, color: '#ffffff'},
});

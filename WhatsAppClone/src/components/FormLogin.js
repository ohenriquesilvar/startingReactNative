import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {modificaEmail, modificaSenha} from './../actions/AutenticacaoActions';

const FormLogin = props => {
  console.log(props);

  return (
    <ImageBackground style={{flex: 1}} source={require('../imgs/original.png')}>
      <View style={styles.view}>
        <View style={styles.logo}>
          <Text style={styles.textLogo}>WhatsApp Clone</Text>
        </View>
        <View style={styles.flex2}>
          <TextInput
            value={props.email}
            style={styles.inputs}
            placeholder="E-mail"
            placeholderTextColor="#fff"
            onChangeText={texto => props.modificaEmail(texto)}
          />
          <TextInput
            style={styles.inputs}
            secureTextEntry
            value={props.senha}
            placeholder="Senha"
            placeholderTextColor="#fff"
            onChangeText={texto => props.modificaSenha(texto)}
          />
          <TouchableHighlight onPress={Actions.cadastro}>
            <Text value={props.senha} style={styles.cadastrar}>
              Ainda não tem cadastro? Cadastre-se
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.flex2}>
          <Button title="Acessar" color="#115E54" onPress={() => false} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 10},
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  textLogo: {fontSize: 25, color: '#fff'},
  flex2: {flex: 2, justifyContent: 'center'},
  inputs: {fontSize: 20, height: 45, color: '#fff'},
  cadastrar: {fontSize: 20, textAlign: 'center', marginTop: 15, color: '#fff'},
});

const mapStatetoProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
});

export default connect(
  mapStatetoProps,
  {modificaEmail, modificaSenha},
)(FormLogin);

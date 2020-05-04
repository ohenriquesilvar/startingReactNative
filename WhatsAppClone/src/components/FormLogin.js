import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  autenticarUsuario,
} from './../actions/AutenticacaoActions';

class FormLogin extends Component {
  _autenticaUsuario() {
    const {email, senha} = this.props;
    this.props.autenticarUsuario({email, senha});
  }

  renderBtnAcessar() {
    if (this.props.loading_login) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <Button
        title="Acessar"
        color="#115E54"
        onPress={() => this._autenticaUsuario()}
      />
    );
  }

  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../imgs/original.png')}>
        <View style={styles.view}>
          <View style={styles.logo}>
            <Text style={styles.textLogo}>WhatsApp Clone</Text>
          </View>
          <View style={styles.flex2}>
            <TextInput
              value={this.props.email}
              style={styles.inputs}
              placeholder="E-mail"
              placeholderTextColor="#fff"
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              style={styles.inputs}
              secureTextEntry
              value={this.props.senha}
              placeholder="Senha"
              placeholderTextColor="#fff"
              onChangeText={texto => this.props.modificaSenha(texto)}
            />
            <Text style={styles.erro}>{this.props.erroLogin}</Text>
            <TouchableHighlight onPress={Actions.cadastro}>
              <Text value={this.props.senha} style={styles.cadastrar}>
                Ainda não tem cadastro? Cadastre-se
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.flex2}>{this.renderBtnAcessar()}</View>
        </View>
      </ImageBackground>
    );
  }
}

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
  erro: {color: 'red', fontSize: 18, textAlign: 'center'},
});

const mapStatetoProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroLogin: state.AutenticacaoReducer.erroLogin,
  loading_login: state.AutenticacaoReducer.loading_login,
});

export default connect(
  mapStatetoProps,
  {modificaEmail, modificaSenha, autenticarUsuario},
)(FormLogin);

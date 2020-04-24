import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario,
} from './../actions/AutenticacaoActions';

class FormCadastro extends Component {
  _cadastraUsuario() {
    const {nome, email, senha} = this.props;

    this.props.cadastraUsuario({nome, email, senha});
  }

  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../imgs/original.png')}>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <TextInput
              value={this.props.nome}
              placeholder="Nome"
              placeholderTextColor="#fff"
              style={styles.inputs}
              onChangeText={texto => this.props.modificaNome(texto)}
            />
            <TextInput
              value={this.props.email}
              placeholder="E-mail"
              placeholderTextColor="#fff"
              style={styles.inputs}
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              value={this.props.senha}
              secureTextEntry
              placeholder="Senha"
              placeholderTextColor="#fff"
              style={styles.inputs}
              onChangeText={texto => this.props.modificaSenha(texto)}
            />
          </View>
          <View style={{flex: 1}}>
            <Button
              title="Cadastrar"
              color="#115E54"
              onPress={() => this._cadastraUsuario()}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  inputs: {fontSize: 20, height: 45, color: '#fff'},
  view1: {flex: 1, padding: 10},
  view2: {flex: 4, justifyContent: 'center'},
});

const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
});

export default connect(
  mapStateToProps,
  {modificaEmail, modificaSenha, modificaNome, cadastraUsuario},
)(FormCadastro);

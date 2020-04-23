import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const FormCadastro = props => (
  <View style={styles.view1}>
    <View style={styles.view2}>
      <TextInput value={props.nome} placeholder="Nome" style={styles.inputs} />
      <TextInput
        value={props.email}
        placeholder="E-mail"
        style={styles.inputs}
      />
      <TextInput
        value={props.senha}
        placeholder="Senha"
        style={styles.inputs}
      />
    </View>
    <View style={{flex: 1}}>
      <Button title="Cadastrar" color="#115E54" onPress={() => false} />
    </View>
  </View>
);
const styles = StyleSheet.create({
  inputs: {fontSize: 20, height: 45},
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
  null,
)(FormCadastro);

import Firebase from './src/firebase';
import React, {Component} from 'react';
import {View, Button} from 'react-native';

class App extends Component {
  cadastrarUsuario() {
    var email = 'rabelohenry@gmail.com';
    var senha = '123456';

    const usuario = Firebase.auth();

    usuario.createUserWithEmailAndPassword(email, senha).catch(erro => {
      alert(erro.message);
    });
  }

  verificarUsuario() {
    const usuario = Firebase.auth();

    usuario.onAuthStateChanged(usuarioAtual => {
      if (usuarioAtual) {
        alert('Usuario esta logado');
      } else {
        alert('Usuario esta nao esta logado');
      }
    });
    // const usuarioAtual = usuario.currentUser;

    // if (usuarioAtual) {
    //   alert('Usuario esta logado');
    // } else {
    //   alert('Usuario esta nao esta logado');
    // }
  }

  deslogarUsuario() {
    const usuario = Firebase.auth();
    usuario.signOut();
  }

  logarUsuario() {
    var email = 'rabelohenry@gmail.com';
    var senha = '123456';

    const usuario = Firebase.auth();
    usuario.signInWithEmailAndPassword(email, senha).catch(erro => {
      alert(erro.message);
    });
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.cadastrarUsuario}
          title="Cadastrar Usuario"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />
        <Button
          onPress={this.verificarUsuario}
          title="Verificar usuario logado"
          color="#841584"
          accessibilityLabel="Listar dados"
        />
        <Button
          onPress={this.deslogarUsuario}
          title="Deslogar usuario"
          color="#841584"
          accessibilityLabel="Listar dados"
        />
        <Button
          onPress={this.logarUsuario}
          title="logar usuario"
          color="#841584"
          accessibilityLabel="Listar dados"
        />
      </View>
    );
  }
}

export default App;

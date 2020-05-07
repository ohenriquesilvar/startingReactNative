import Firebase from '../firebase';
import b64 from 'base-64';
import _ from 'lodash';
import {
  MODIFICA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  LISTA_CONTATO_USUARIO,
  MODIFICA_MENSAGEM,
} from './types';

export const modificaAdicionaContatoEmail = texto => {
  return {
    type: MODIFICA_CONTATO_EMAIL,
    payload: texto,
  };
};

export const adicionaContato = email => {
  return dispatch => {
    var emailB64 = b64.encode(email);
    Firebase.database()
      .ref(`contatos/ ${emailB64}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          const dadosUsuario = _.first(_.values(snapshot.val()));

          const {currentUser} = Firebase.auth();
          var emailUsuarioB64 = b64.encode(currentUser.email);

          Firebase.database()
            .ref(`/usuario_contatos/ ${emailUsuarioB64}`)
            .push({email: email, nome: dadosUsuario.nome})
            .then(() => adicionaContatoSucesso(dispatch))
            .catch(erro => adicionaContatoErro(erro.message, dispatch));
        } else {
          dispatch({
            type: ADICIONA_CONTATO_ERRO,
            payload: 'E-mail informado não cadastrado',
          });
        }
      });
  };
};

const adicionaContatoSucesso = dispatch =>
  dispatch({
    type: ADICIONA_CONTATO_SUCESSO,
    payload: true,
  });

const adicionaContatoErro = (erro, dispatch) =>
  dispatch({
    type: ADICIONA_CONTATO_ERRO,
    payload: erro,
  });

export const habilitarInclusaoContato = () => {
  return {
    type: ADICIONA_CONTATO_SUCESSO,
  };
};

export const contatosUsuarioFetch = () => {
  const {currentUser} = Firebase.auth();

  return dispatch => {
    let emailUsuarioB64 = b64.encode(currentUser.email);

    Firebase.database()
      .ref(`/usuario_contatos/ ${emailUsuarioB64}`)
      .on('value', snapshot => {
        dispatch({type: LISTA_CONTATO_USUARIO, payload: snapshot.val()});
      });
  };
};

export const modificaMensagem = texto => {
  return {
    type: MODIFICA_MENSAGEM,
    payload: texto,
  };
};

export const enviarMensagem = mensagem => {
  console.log(mensagem);
  return {
    type: 'xyz',
  };
};

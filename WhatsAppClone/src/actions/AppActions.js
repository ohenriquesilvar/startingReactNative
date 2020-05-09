import Firebase from '../firebase';
import b64 from 'base-64';
import _ from 'lodash';
import {
  MODIFICA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  LISTA_CONTATO_USUARIO,
  MODIFICA_MENSAGEM,
  LISTA_CONVERSA_USUARIO,
  LISTA_CONVERSAS_USUARIO,
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

export const enviarMensagem = (mensagem, contatoNome, contatoEmail) => {
  const {currentUser} = Firebase.auth();
  const usuarioEmailb64 = b64.encode(currentUser.email);

  return dispatch => {
    const contatoEmailb64 = b64.encode(contatoEmail);

    Firebase.database()
      .ref(`/mensagens/ ${usuarioEmailb64}/ ${contatoEmailb64}`)
      .push({mensagem, tipo: 'e'})
      .then(() => {
        Firebase.database()
          .ref(`/mensagens/ ${contatoEmailb64}/ ${usuarioEmailb64}`)
          .push({mensagem, tipo: 'r'})
          .then(() =>
            dispatch({
              type: 'xyz',
            }),
          );
      })
      .then(() => {
        Firebase.database()
          .ref(`usuario_conversas/${usuarioEmailb64}/${contatoEmailb64}`)
          .set({nome: contatoNome, email: contatoEmail});
      })
      .then(() => {
        Firebase.database()
          .ref(`/contatos/ ${usuarioEmailb64}`)
          .once('value')
          .then(snapshot => {
            let dadosUsuario = _.first(_.values(snapshot.val()));
            Firebase.database()
              .ref(`usuario_conversas/${contatoEmailb64}/${usuarioEmailb64}`)
              .set({nome: dadosUsuario.nome, email: currentUser.email});
          });
        dispatch({
          type: MODIFICA_MENSAGEM,
          payload: '',
        });
      });
  };
};

export const conversaUsuarioFetch = contatoEmail => {
  const {currentUser} = Firebase.auth();
  const usuarioEmailb64 = b64.encode(currentUser.email);
  let contatoEmailB64 = b64.encode(contatoEmail);
  return dispatch => {
    Firebase.database()
      .ref(`/mensagens/ ${usuarioEmailb64}/ ${contatoEmailB64}`)
      .on('value', snapshot => {
        dispatch({type: LISTA_CONVERSA_USUARIO, payload: snapshot.val()});
      });
  };
};

export const conversasUsuarioFetch = () => {
  const {currentUser} = Firebase.auth();

  return dispatch => {
    let emailUsuarioB64 = b64.encode(currentUser.email);

    Firebase.database()
      .ref(`/usuario_conversas/${emailUsuarioB64}`)
      .on('value', snapshot => {
        dispatch({type: LISTA_CONVERSAS_USUARIO, payload: snapshot.val()});
      });
  };
};

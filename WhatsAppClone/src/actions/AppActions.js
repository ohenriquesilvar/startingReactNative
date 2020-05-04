import Firebase from '../firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';
import {MODIFICA_CONTATO_EMAIL} from './types';

export const modificaAdicionaContatoEmail = texto => {
  return {
    type: MODIFICA_CONTATO_EMAIL,
    payload: texto,
  };
};

export const adicionaContato = email => {
  var emailb64 = b64.encode(email);

  Firebase.database()
    .ref(`/contatos/${emailb64}`)
    .once('value')
    .then(snapshot => {
      if (snapshot.val()) {
        console.log('existe');
      } else {
        console.log('n existe');
      }
    });

  return {
    type: 'teste',
  };
};

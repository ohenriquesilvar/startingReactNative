import {
  MODIFICA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  LISTA_CONTATO_USUARIO,
} from '../actions/types';

const INITIAL_STATE = {
  adiciona_contato_email: '',
  cadastro_resultado_txt_erro: '',
  cadastro_resultado_inclusao: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_CONTATO_EMAIL:
      return {...state, adiciona_contato_email: action.payload};
    case ADICIONA_CONTATO_ERRO:
      return {...state, cadastro_resultado_txt_erro: action.payload};
    case ADICIONA_CONTATO_SUCESSO:
      return {
        ...state,
        cadastro_resultado_inclusao: false,
        adiciona_contato_email: '',
      };
  }
  return state;
};

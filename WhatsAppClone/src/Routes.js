import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';
import Conversa from './components/Conversa';

const Routes = () => {
  return (
    <Router
      navigationBarStyle={{
        backgroundColor: '#115E54',
      }}>
      <Scene>
        <Scene key="login" component={FormLogin} title="Login" hideNavBar />
        <Scene
          key="cadastro"
          component={FormCadastro}
          title="Cadastro"
          titleStyle={{flex: 1, textAlign: 'center', color: '#fff'}}
        />
        <Scene
          key="boasvindas"
          component={BoasVindas}
          title="Bem-Vindo"
          hideNavBar
        />
        <Scene
          key="principal"
          component={Principal}
          title="Principal"
          hideNavBar
        />
        <Scene
          key="adicionar"
          component={AdicionarContato}
          title="Adicionar Contato"
          titleStyle={{flex: 1, textAlign: 'center', color: '#fff'}}
        />
        <Scene
          key="conversa"
          component={Conversa}
          title="Conversa"
          titleStyle={{flex: 1, textAlign: 'center', color: '#fff'}}
        />
      </Scene>
    </Router>
  );
};
export default Routes;

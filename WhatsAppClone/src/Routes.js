import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

const Routes = () => {
  return (
    <Router>
      <Scene>
        <Scene key="login" component={FormLogin} title="Login" initial />
        <Scene key="cadastro" component={FormCadastro} title="Cadastro" />
      </Scene>
    </Router>
  );
};
export default Routes;

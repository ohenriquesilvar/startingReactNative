import React from 'react';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';
import {Router, Scene} from 'react-native-router-flux';

const Routes = () => {
  return (
    <Router sceneStyle={{paddingTop: 50}}>
      <Scene key="principal" component={Principal} title="Cara ou Coroa" />
      <Scene key="sobrejogo" component={SobreJogo} title="Sobre o jogo" />
      <Scene key="outrosjogos" component={OutrosJogos} title="Outros Jogos" />
      <Scene key="resultado" component={Resultado} title="Resultado" />
    </Router>
  );
};

export default Routes;

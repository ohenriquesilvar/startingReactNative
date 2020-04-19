import React, {Component} from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresas from './src/components/CenaEmpresas';
import CenaServicos from './src/components/CenaServicos';

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'principal'}}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'principal':
              return <CenaPrincipal navigator={navigator} />;

            case 'cliente':
              return <CenaClientes navigator={navigator} />;

            case 'contato':
              return <CenaContatos navigator={navigator} />;

            case 'empresa':
              return <CenaEmpresas navigator={navigator} />;

            case 'servico':
              return <CenaServicos navigator={navigator} />;

            default:
              return false;
          }
        }}
      />
    );
  }
}

export default App;

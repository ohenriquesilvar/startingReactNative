import React, {Component} from 'react';
import {View} from 'react-native';

import {Topo, Resultado, Painel} from './src/components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {num1: '', num2: '', operacao: 'soma', resultado: ''};
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    var resultado = 0;
    switch (this.state.operacao) {
      case 'soma':
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;
      case 'subtrair':
        resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
      default:
        resultado = 0;
    }
    this.setState({resultado: resultado.toString()});
  }

  atualizaValor(nome, numero) {
    const obj = {};
    obj[nome] = numero;
    this.setState(obj);
  }

  atualizaOperacao(op) {
    this.setState({operacao: op});
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          calcular={this.calcular}
          atualizaValor={this.atualizaValor}
          atualizaOperacao={this.atualizaOperacao}
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
        />
      </View>
    );
  }
}

export default App;

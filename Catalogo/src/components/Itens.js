import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export class Itens extends Component {
  render() {
    return (
      <View style={styles.back}>
        <View style={styles.rolar}>
          <Image
            style={{height: 100, width: 100}}
            source={{uri: this.props.item.foto}}
          />
          <View style={styles.dados}>
            <Text style={styles.title}>{this.props.item.titulo}</Text>
            <Text style={styles.valor}>R$:{this.props.item.valor}</Text>
            <Text style={styles.demais}>
              Local: {this.props.item.local_anuncio}
            </Text>
            <Text style={styles.demais}>
              Dt publicação: {this.props.item.data_publicacao}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  back: {
    backgroundColor: 'darkgrey',
  },
  rolar: {
    margin: 10,
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  dados: {
    width: 250,
    paddingLeft: 25,
  },
  title: {
    fontSize: 23,
    color: 'darkblue',
  },
  valor: {
    fontSize: 17,
    fontWeight: '700',
  },
  demais: {
    fontSize: 17,
  },
});

export default Itens;

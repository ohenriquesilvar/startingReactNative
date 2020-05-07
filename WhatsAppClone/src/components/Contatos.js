import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import {contatosUsuarioFetch} from '../actions/AppActions';

class Contatos extends Component {
  UNSAFE_componentWillMount() {
    this.props.contatosUsuarioFetch();
    this.criaFonteDeDados(this.props.contatos);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.contatos);

    this.criaFonteDeDados(nextProps.contatos);
  }

  criaFonteDeDados(contatos) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.fonteDeDados = ds.cloneWithRows(contatos);
  }

  render() {
    return (
      <TouchableHighlight onPress={() => Actions.conversa()}>
        <ListView
          enableEmptySections
          dataSource={this.fonteDeDados}
          renderRow={data => (
            <View
              style={{
                flex: 1,
                padding: 20,
                borderBottomWidth: 1,
                borderColor: '#CCC',
              }}>
              <Text style={{fontSize: 25}}>{data.nome}</Text>
              <Text style={{fontSize: 18}}>{data.email}</Text>
            </View>
          )}
        />
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => {
  const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
    return {...val, uid};
  });
  console.log();

  return {contatos};
};

export default connect(
  mapStateToProps,
  {contatosUsuarioFetch},
)(Contatos);

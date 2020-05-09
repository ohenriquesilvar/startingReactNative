import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import {conversasUsuarioFetch} from '../actions/AppActions';

class Conversas extends Component {
  UNSAFE_componentWillMount() {
    this.props.conversasUsuarioFetch();
    this.criaFonteDeDados(this.props.conversas);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.conversas);

    this.criaFonteDeDados(nextProps.conversas);
  }

  criaFonteDeDados(conversas) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.fonteDeDados = ds.cloneWithRows(conversas);
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.fonteDeDados}
        renderRow={data => (
          <TouchableHighlight
            onPress={() =>
              Actions.conversa({
                title: data.nome,
                conversaNome: data.nome,
                conversaEmail: data.email,
              })
            }>
            <View
              style={{
                flex: 1,
                padding: 20,
                borderBottomWidth: 1,
                borderColor: '#CCC',
              }}>
              <Text style={{fontSize: 25}}>{data.nome}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
    return {...val, uid};
  });
  console.log();

  return {conversas};
};

export default connect(
  mapStateToProps,
  {conversasUsuarioFetch},
)(Conversas);

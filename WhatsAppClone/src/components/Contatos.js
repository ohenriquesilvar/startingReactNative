import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {contatosUsuarioFetch} from '../actions/AppActions';

class Contatos extends Component {
  // UNSAFE_componentWillMount() {
  //   this.props.contatosUsuarioFetch();
  // }

  render() {
    return (
      <View>
        <Text>Contatos</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {contatosUsuarioFetch},
)(Contatos);

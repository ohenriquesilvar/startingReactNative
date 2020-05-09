import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import Firebase from '../firebase';
import {habilitarInclusaoContato} from './../actions/AppActions';

const TabBarMenu = props => (
  <View
    style={{
      backgroundColor: '#115e54',
      elevation: 4,
      marginBottom: 6,
    }}>
    <StatusBar backgroundColor="#114d44" />

    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
      <View style={styles.view}>
        <Text style={styles.logo}>WhatsApp Clone</Text>
      </View>

      <View
        style={{
          marginBottom: 6,
          flexDirection: 'row',
          justifyContent: 'center',
          marginRight: 20,
        }}>
        <View style={{width: 50, justifyContent: 'center'}}>
          <TouchableHighlight
            onPress={() => {
              Actions.adicionar();
              props.habilitarInclusaoContato();
            }}
            underlayColor="#114d44">
            <Image source={require('../imgs/add.png')} />
          </TouchableHighlight>
        </View>
        <View style={{justifyContent: 'center'}}>
          <TouchableHighlight
            underlayColor="#114d44"
            onPress={() =>
              Firebase.auth()
                .signOut()
                .then(() => Actions.login())
            }>
            <Text style={{fontSize: 20, color: '#fff'}}>Sair</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
    <TabBar {...props} style={{backgroundColor: '#115e54', elevation: 0}} />
  </View>
);

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {habilitarInclusaoContato},
)(TabBarMenu);

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    height: 50,
  },
  logo: {
    color: '#fff',
    marginLeft: 20,
    fontSize: 20,
  },
});

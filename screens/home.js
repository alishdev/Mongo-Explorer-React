/**
 * home.js
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Button,
  Alert,
  TouchableHighlight
} from 'react-native';

export default class HomePage extends Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['localhost:80/crunchbase', '172.89.34.12:20071/video']),
        };
    }

    static navigationOptions = {
      title: 'Mongo Explorer',
      headerTintColor: 'green'
    };

    onNewConnection (){
        this.props.navigation.navigate('NewConnection', { user: 'Lucy' });
    }

  render() {
      let recentConnections = null;
      if (this.state.dataSource.getRowCount() > 0)
      {
        recentConnections = 
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />;
      }

    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Connect to any Mongo database.{'\n'}
          Click on "New Connection" button{'\n'}
          or Select from recent{'\n'}{'\n'}
        </Text>
        <TouchableHighlight style={styles.fullWidthButton} onPress={this.onNewConnection.bind(this)}>
            <Text style={styles.fullWidthButtonText}>New Connection</Text>
        </TouchableHighlight>

          <Text style={styles.subTitle}>
                  Recent Connections 
                  </Text>
          {recentConnections}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf:'stretch',
    margin:20
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50
  },
  fullWidthButton: {
    backgroundColor: '#69B141',
    height:30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf:'stretch'
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white',
    textAlign: 'center'
  },
  instructions:{
    fontSize: 20
  }
});

module.exports = HomePage;

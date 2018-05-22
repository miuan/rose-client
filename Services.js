import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Services extends React.Component {
  constructor(...args){
    super(...args);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#fff'}}>AHOJ</Text> 
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
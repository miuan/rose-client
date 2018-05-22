import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

export class Services extends React.Component {
  constructor(...args){
    super(...args);
  }

  render() {
    return (
      <View style={styles.container}>    
        {this.props.data.loading ? <Text style={{color:'#fff'}}>Loading...</Text> : null}
        {this.props.data.allServiceses ? this.props.data.allServiceses.map((s) => <Text style={{color:'#a1a1f1'}}>{s.text}</Text>) : null}
      </View>
    );
  }
}

export default graphql(gql`
  {allServiceses{
    id,
    text,
    title,
    language
  }}
`)(Services);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
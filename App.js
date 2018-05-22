import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import { ApolloProvider } from 'react-apollo';
import ApolloClient  from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default class App extends React.Component {

  constructor(...args){
    super(...args);
    this.client = new ApolloClient({
      link: new HttpLink({uri:'https://api.graph.cool/simple/v1/cjb646u2r08sq0159u7r9hvu6'}),
      cache: new InMemoryCache()
    });
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <View style={styles.container}>
          <Text style={{color:'#fff'}}>AHOJ</Text>
        </View>
      </ApolloProvider>
    );
  }
}

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

export const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: App },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

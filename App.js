import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import { ApolloProvider } from 'react-apollo';
import ApolloClient  from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


import Services from './Services'
export default class App extends React.Component {

  constructor(...args){
    super(...args);
    this.client = new ApolloClient({
      link: new HttpLink({uri:'https://api.graph.cool/simple/v1/cjheviv534c3b0158hvmz4sde'}),
      cache: new InMemoryCache()
    });
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <Services />
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



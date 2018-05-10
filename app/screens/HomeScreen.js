import React from 'react';
import { AsyncStorage, Button, Image, Linking, Text, View } from 'react-native';

import github from '../assets/github.png';

import styles from '../styles';

import config from '../config';

import { getParameterByName } from '../utils/codingUtils';
import { setToken } from '../utils/tokenUtils';

import api from '../api';

export default class HomeScreen extends React.Component {
  async componentDidMount() {
    const TOKEN = await AsyncStorage.getItem('GitHubToken');

    if (TOKEN) {
      this.props.navigation.navigate('Details');
    }
    Linking.addEventListener('url', this.handleUrl);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleUrl);
  }

  handleUrl = ({ url }) => {
    const CODE = getParameterByName('code', url);

    if (CODE) {
      api.post('https://github.com/login/oauth/access_token', {
        'client_id': config.clientId,
        'client_secret': config.clientSecret,
        'code': CODE
      })
          .then(res => res.json())
          .then(async data => {
            if (data) {
              setToken(data.access_token);
              this.props.navigation.navigate('Details');
            }
          })
    }
  };


  render() {
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={github} />
          <Text style={styles.paragraph}>
            Github Authorization
          </Text>
          <Button
              onPress={() => Linking.openURL(`https://github.com/login/oauth/authorize?client_id=${config.clientId}`)}
              title='Authorize'
          />
        </View>
    );
  }
} 
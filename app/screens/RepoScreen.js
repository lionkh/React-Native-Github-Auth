import React from 'react';
import { Button, ScrollView, Text } from 'react-native';

import styles from '../styles';

import { decode } from '../utils/codingUtils.js';
import { clearToken, getToken } from '../utils/tokenUtils';

import api from '../api';

export default class RepoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: {}
    };
    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    if (!await getToken()) {
      this.logout();
    }
    const { navigation } = this.props;
    const REPO = navigation.getParam('repo');

    if (REPO) {
      api.get(REPO.url + '/readme')
          .then(res => res.json())
          .then(data => {
            this.setState({
              repo: { ...REPO, readMe: decode(data.content) }
            })
          })
    }
  }

  async logout() {
    clearToken();
    this.props.navigation.navigate('Home');
  }


  render() {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.heading}>
            Repository details:
          </Text>
          <Text style={styles.paragraph}>
            Project: {this.state.repo.name}
          </Text>
          <Text style={styles.miniParagraph}>
            Description: {this.state.repo.description}
          </Text>
          <Text style={styles.miniParagraph}>
            README: {this.state.repo.readMe}
          </Text>
          <Button onPress={this.logout} title='Logout' />
        </ScrollView>
    );
  }
} 
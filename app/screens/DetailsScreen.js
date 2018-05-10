import React, { Component } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

import styles from '../styles';

import { clearToken, getToken } from '../utils/tokenUtils';

import api from '../api/';

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      repos: []
    };

    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    if (!await getToken()) {
      this.logout();
    }
    api.get(`https://api.github.com/user`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            userName: data.name
          });

          api.get(data.repos_url)
              .then(res => res.json())
              .then(data => {
                this.setState({
                  repos: data.map(repo => ({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    url: repo.url
                  }))
                })
              });
        })
  }

  openRepo(repo) {
    this.props.navigation.navigate('Repo', {
      repo
    });
  }

  async logout() {
    clearToken();
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          {this.state.userName &&
          <View>
            <Text style={styles.heading}>Welcome, {this.state.userName}!</Text>
            <Text style={styles.paragraph}>Your Repositories:</Text>
          </View>}
          {
            this.state.repos.map(repo => {
              return (
                  <Text key={repo.id} onPress={() => this.openRepo(repo)} style={styles.repo}>{repo.name}</Text>
              )
            })
          }
          <Button buttonStyle={styles.logoutButton} onPress={this.logout} title='Logout' />
        </ScrollView>
    );
  }
}
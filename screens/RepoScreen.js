import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

import github from '../assets/github.png';

import styles from '../styles/screens/Home';

import { decode } from '../utils/codingUtils.js';

export default class RepoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: {}
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        const REPO = navigation.getParam('repo');

        if (REPO) {
            fetch(REPO.url + "/readme")
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        repo: { ...REPO, readMe: decode(data.content) }
                    })
                })
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Logout"/>
                <Text style={styles.paragraph}>
                    {this.state.repo.name}
                </Text>
                <Text style={styles.paragraph}>
                    {this.state.repo.description}
                </Text>
                <Text style={styles.paragraph}>
                    {this.state.repo.readMe}
                </Text>
            </ScrollView>
        );
    }
} 
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

import styles from '../styles/screens/Home';

export default class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: []
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/lionkh')
            .then(res => res.json())
            .then(data => {
                fetch(data.repos_url)
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

    render() {
        return (
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Logout"/>
                {
                    this.state.repos.map(repo => {
                        return (
                            <View key={repo.id} style={styles.repo}>
                                <Text onPress={() => this.openRepo(repo)} style={styles.repoName}>{repo.name}</Text>
                                <Text style={styles.repoDesc}>{repo.description}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        );
    }
}
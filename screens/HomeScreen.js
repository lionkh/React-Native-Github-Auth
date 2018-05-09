import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

import github from '../assets/github.png';

import styles from '../styles/screens/Home';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={github}/>
                <Text style={styles.paragraph}>
                    Github Authorization
                </Text>
                <Button onPress={() => this.props.navigation.navigate('Details')} style={styles.button}
                        title="Authorize"/>
            </View>
        );
    }
} 
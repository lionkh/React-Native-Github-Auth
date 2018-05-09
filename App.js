import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';

import github from './assets/github.png';

import DetailsScreen from './screens/DetailsScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import RepoScreen from './screens/RepoScreen.js';

export default createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Repo: RepoScreen
    },
    {
        initialRouteName: 'Home',
    }
);

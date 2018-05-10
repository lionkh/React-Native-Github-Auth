import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DetailsScreen from './app/screens/DetailsScreen.js';
import HomeScreen from './app/screens/HomeScreen.js';
import RepoScreen from './app/screens/RepoScreen.js';

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

import { AsyncStorage } from 'react-native';

export async function getToken() {
  return await AsyncStorage.getItem('GitHubToken');
}

export async function setToken(token) {
  await AsyncStorage.setItem('GitHubToken', token);
}

export async function clearToken() {
  await AsyncStorage.clear();
}
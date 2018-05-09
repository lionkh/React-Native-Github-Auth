import { Constants } from 'expo';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    repo: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    repoName: {
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    repoDesc: {
        fontSize: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150
    },
    button: {
        fontSize: 18,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});

export default styles;
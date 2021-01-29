import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textInput: {
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        margin: 10,
    },
    button: {
        backgroundColor: '#ff4747',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default styles;
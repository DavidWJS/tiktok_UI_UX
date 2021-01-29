import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonRecord: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'tomato',
        marginVertical: 10,
    },
    buttonStop: {
        alignSelf: 'center',
        height: 30,
        width: 30,
        borderRadius: 3,
        backgroundColor: 'tomato',
        marginVertical: 20,
    },
});

export default styles;
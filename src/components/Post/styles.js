import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        width: '100%',
        height: Dimensions.get('window').height - 130,
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'flex-end',
    },
    userName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    songImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 6,
        borderColor: 'grey'
    },

    //side
    rightContainer: {
        alignSelf: 'flex-end',
        height: 250,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
    },
    iconLabel: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 3
    }
})

export default styles;
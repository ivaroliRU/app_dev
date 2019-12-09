import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        backgroundColor: '#FFF',
        marginBottom: -1
    },
    contactName : {
        fontSize: 20,
    },
    arrow: {
        marginLeft: 'auto',
        paddingRight: 10
    },
    textContainer:{
        marginLeft: 10,
    }
  });

export default styles;
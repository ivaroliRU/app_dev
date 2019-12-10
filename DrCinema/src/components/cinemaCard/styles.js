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
        backgroundColor: '#303337',
        marginBottom: -1
    },
    text:{
        color: "#FFF"
    },
    contactName : {
        fontSize: 20,
        color: "#FFF"
    },
    arrow: {
        marginLeft: 'auto',
        paddingRight: 10
    },
    textContainer:{
        marginLeft: 10,
        color: "#FFF"
    }
  });

export default styles;
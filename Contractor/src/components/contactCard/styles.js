import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#AAA'
    },
    contactImage:{
        width: 50,
        height: 50,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 50 / 2,
        overflow: "hidden",
    },
    contactName : {
        fontSize: 20,
    },
    arrow: {
        marginLeft: 'auto',
        paddingRight: 10
    }
  });

export default styles;
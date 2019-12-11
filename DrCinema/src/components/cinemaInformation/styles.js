import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',

  },
  touchableContainer:{
    width: '100%',
    height: '50%'
  },

  textHeader:{
    color: '#00cef3',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 30,



  },
  information:{
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 30,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10

  }


});

export default styles;

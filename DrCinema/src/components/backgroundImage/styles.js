import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    touchableContainer:{
        width: '100%',
        height: '50%'
      },
      imageContainer:{
        width: '100%',
        height: '100%'
      },
      textContainer:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textHeader:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 30
    }
});

export default styles;
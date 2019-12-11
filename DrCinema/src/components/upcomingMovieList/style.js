import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      infoContainer:{
        paddingLeft: 15,
        paddingTop: 40,
        flexShrink: 1
      },
      infoHeader:{
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
        flexShrink: 1

      },
      info:{
        color: "#FFF",
        fontSize: 12,
        paddingTop: 5
      }
    });

export default styles;

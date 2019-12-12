import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: '#16171b',
  },
  headerImageContainer:{
    width: '100%',
    height: '40%'
  },
  headerImage:{
    width: '100%',
    height: '100%',
    resizeMode:'cover'
  },
  headerWebView:{
    flex: 0,
    width: '100%',
    height: '100%'
  },
  textTitle:{
    textAlign: "center",
    alignContent: "center",
    fontSize: 20,
    color: '#fff',
    marginTop: 5
  },
  textRelease:{
    textAlign: "center",
    alignContent: "center",
    color: '#fff',
    margin: 5
  },
  textInformation:{
    textAlign: "center",
    alignContent: "center",
    color: '#fff',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5
  }

});

export default styles;

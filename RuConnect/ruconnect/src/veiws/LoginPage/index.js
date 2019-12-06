import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
var t = require('tcomb-form-native');

var Form = t.form.Form;
 
// here we are: define your domain model
var User = t.struct({
  email: t.String,              // a required string
  password: t.String,  // an optional string
});

var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

class LoginPage extends React.Component {
  constructor (props) {
    super(props);
  }

  handleLogin(){
    
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/ruConnectLogo.png')} style={styles.logo} />
        <Form
          ref="form"
          type={User}
          options={options}
          />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  logo:{
    alignSelf: 'center',
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20
  }
});

export default LoginPage;

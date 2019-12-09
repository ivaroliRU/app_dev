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

    this.state = {
      formValue:{
        email: '',
        password: ''
      }
    }

    this.onChange = this.onChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin(){
    var email = this.state.formValue.email;
    var password = this.state.formValue.password;

    fetch('192.168.1.126:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: {
        email: email,
        password: password,
      }}),
    }).then((response) => response.json())
    .then((responseJson) => {
      log(responseJson)
    })
    .catch((error) => {
      console.error(error); 
    });
  }

  onChange(value){
    this.setState({formValue:{email:value.email, password:value.password}});
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/ruConnectLogo.png')} style={styles.logo} />
        <Form
          ref="form"
          type={User}
          options={options}
          onChange={this.onChange}
          value={this.state.formValue}
          />
        <TouchableHighlight style={styles.button} onPress={this.handleLogin} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Sign In</Text>
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

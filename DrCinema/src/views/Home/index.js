import React from 'react';
import { Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

cinemaPhoto = "http://s3-eu-west-1.amazonaws.com/fredassets/uploads/sites/30/2017/09/CinemaAccessibility.jpg"
upcomeingPhoto = 'https://www.bollyquick.com/wp-content/uploads/2019/11/Ajay-Devgan-Upcoming-Movies.jpg'

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      <TouchableOpacity onPress={}><Image style={{width: '50%', height: '50%'}} source={{uri: cinemaPhoto}} ></Image></TouchableOpacity>
      <TouchableOpacity onPress={}><Image style={{width: '50%', height: '50%'}} source={{uri: upcomeingPhoto}} ></Image></TouchableOpacity>
      </View>
    )
  }
};

export default Home;

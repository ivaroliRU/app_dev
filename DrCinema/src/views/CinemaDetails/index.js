import React from 'react';
import { Text, TouchableOpacity, ImageBackground, View, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import { updateAuthentication } from '../../actions/authenticationActions';
import { updateCinemas } from '../../actions/cinemasActions';
import { connect } from 'react-redux';
import CinemaInformation from '../../components/cinemaInformation';
import BackgroundImage from '../../components/backgroundImage'

cinemaPhoto = 'https://en.balsan.com/sites/default/files/media/inspiration_slides/201902/vmaxsphera50.jpg'

class CinemaDetails extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

handleModal = (statement) => {
  this.setState({ modalVisible: statement });
}

  render() {
    const { navigation } = this.props;
    const cinema = navigation.getParam('cinema' , 'NO-ID');
    return (
      <SafeAreaView style={{backgroundColor: '#020302', flex:1 }}>
          <View>
              <BackgroundImage image={cinemaPhoto} destination='Cinema'></BackgroundImage>
              <CinemaInformation cinema={cinema} />
          </View>
      </SafeAreaView>
    )
  }
};



export default CinemaDetails;
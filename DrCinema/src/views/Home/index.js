import React from 'react';
import { Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import styles from './styles';
import { updateAuthentication } from '../../actions/authenticationActions';
import { connect } from 'react-redux';
import BackgroundImage from '../../components/backgroundImage'

cinemaPhoto = 'https://en.balsan.com/sites/default/files/media/inspiration_slides/201902/vmaxsphera50.jpg'
upcomeingPhoto = 'https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg'

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateAuthentication();
  }

  render() {
    return (
      <View style={styles.container} >
        <BackgroundImage text='Cinemas' image={cinemaPhoto}></BackgroundImage>
        <BackgroundImage text='Upcoming Movies' image={upcomeingPhoto}></BackgroundImage>
      </View>
    )
  }
};

function mapStateToProps(state){  
    return{
      authentication: state.authentication
    };
  }

const mapDispatchToProps = dispatch => {
    return {
        updateAuthentication: () => {
        dispatch(updateAuthentication());
      }
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);

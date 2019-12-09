import React from 'react';
import { Text, TouchableOpacity, ImageBackground, View, ScrollView } from 'react-native';
import styles from './styles';
import { updateAuthentication } from '../../actions/authenticationActions';
import { connect } from 'react-redux';
import BackgroundImage from '../../components/backgroundImage'

cinemaPhoto = 'https://en.balsan.com/sites/default/files/media/inspiration_slides/201902/vmaxsphera50.jpg'

class CinemaDetails extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateAuthentication();
  }

  render() {
    return (
      <View style={styles.container} >
        <BackgroundImage text='Cinema 1' image={cinemaPhoto} ></BackgroundImage>
        <Text style={styles.information}>Description</Text>
        <Text style={styles.information}>Address</Text>
        <Text style={styles.information}>Phone</Text>
        <Text style={styles.information}>Website</Text>
        <Text style={styles.movies}> Movies in this cinema </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(CinemaDetails);

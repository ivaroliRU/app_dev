import React from 'react';
import { Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import { updateAuthentication } from '../../actions/authenticationActions';
import { connect } from 'react-redux';

cinemaPhoto = 'https://en.balsan.com/sites/default/files/media/inspiration_slides/201902/vmaxsphera50.jpg'
upcomeingPhoto = 'https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg'

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateAuthentication();
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: "column"}} >
      <TouchableOpacity style={{width: '100%', height: '50%'}}>
        <ImageBackground style={{width: '100%', height: '100%'}} source={{uri: cinemaPhoto}} >
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 30}}>Cinemas</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={{width: '100%', height: '50%'}}>
        <ImageBackground style={{width: '100%', height: '100%'}} source={{uri: upcomeingPhoto}} >
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 30}}>Upcoming Movies</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
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

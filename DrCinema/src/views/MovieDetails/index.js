import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import { withTheme } from 'react-native-elements';

class MovieDetails extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
        <View>
            <ImageBackground style={{width: '100%', height: '75%', flex: 1, flexDirection: "row"}} source={{uri: 'https://kvikmyndir.is/images/poster/12430_500.jpg'}}>
                <Text style={{fontSize: 30, color: 'white'}}>Godzilla Vs Kong</Text>
            </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
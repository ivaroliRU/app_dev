import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-material-ui';

class MovieDetails extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
        <View>
            <Text>
                Hæ
            </Text>
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
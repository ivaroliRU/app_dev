import React from 'react';
<<<<<<< HEAD
import { Text, StyleSheet, View } from 'react-native';
import { updateAuthentication } from '../../actions/authenticationActions';
import { connect } from 'react-redux';

class Cinema extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
            Cinemas
        </Text>
      </View>
    )
  }
}

export default Cinema;


const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },
  container: {
        flex: 1,
        height: 70,
        alignItems: 'center',
        height: 70,
        borderTopWidth: 30,
        borderTopColor: '#EEE',
        backgroundColor: '#FFF',
    }
})
=======
import { Text } from 'react-native';
import { updateCinemas } from '../../actions/cinemasActions';
import { connect } from 'react-redux';

class Cinema extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateCinemas(this.props.token);
  }

  render() {
    return (
      <Text style={{backgroundColor: '#E1E8EE'}}>
          typpi
      </Text>
    )
  }
};

function mapStateToProps(state){  
    return{
      token: state.authentication
    };
  }

const mapDispatchToProps = dispatch => {
    return {
        updateCinemas: (token) => {
        dispatch(updateCinemas(token));
      }
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
>>>>>>> a7d00caf29828158183574224e9199e2293b5bd3

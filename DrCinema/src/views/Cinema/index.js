import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { updateCinemas } from '../../actions/cinemasActions';
import { connect } from 'react-redux';

class Cinema extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateCinemas(this.props.token);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
            Cinemas
        </Text>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cinema);

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

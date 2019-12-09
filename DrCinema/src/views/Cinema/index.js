import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { updateCinemas } from '../../actions/cinemasActions';
import CinemaList from '../../components/cinemaList';
import { connect } from 'react-redux';

class Cinema extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateCinemas(this.props.token);
  }

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#E1E8EE', flex:1}}>
        <ScrollView>
           
          <CinemaList cinemas={this.props.cinemas} />
        </ScrollView>
      </SafeAreaView>
    )
  }
};

function mapStateToProps(state){
    return{
      token: state.authentication,
      cinemas: state.cinemas
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
    }
})

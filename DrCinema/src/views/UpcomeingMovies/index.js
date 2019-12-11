import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { updateUpcomingMovies } from '../../actions/moviesActions';
import { connect } from 'react-redux';
import UpcomingMovieList from '../../components/upcomingMovieList';

class UpcomingMovies extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateUpcomingMovies(this.props.token);
  }
  
  render() {
    return (
        <SafeAreaView style={{backgroundColor: '#16171b', flex:1}}>
            <ScrollView>
                <UpcomingMovieList upcomingMovies={this.props.upcomingMovies} />
            </ScrollView>
        </SafeAreaView>
    )
  }
};

function mapStateToProps(state){
    return{
      token: state.authentication,
      upcomingMovies: state.upcomingMovies
    };
  }

const mapDispatchToProps = dispatch => {
    return {
        updateUpcomingMovies: (token) => {
        dispatch(updateUpcomingMovies(token));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovies);

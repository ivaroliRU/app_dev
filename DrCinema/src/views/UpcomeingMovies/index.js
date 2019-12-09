import React from 'react';
import { Text, View } from 'react-native';
import { updateUpcomingMovies } from '../../actions/moviesActions';
import { connect } from 'react-redux';

class UpcomingMovies extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateUpcomingMovies(this.props.token);
  }
  
  render() {
    return (
      <View>
        <Text>
            Upcoming Movies
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
        updateUpcomingMovies: (token) => {
        dispatch(updateUpcomingMovies(token));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovies);

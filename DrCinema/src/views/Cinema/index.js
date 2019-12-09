import React from 'react';
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

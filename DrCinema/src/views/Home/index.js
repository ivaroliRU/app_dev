import React from 'react';
import { Text } from 'react-native';
import { updateAuthentication } from '../../actions/authenticationActions';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateAuthentication();
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

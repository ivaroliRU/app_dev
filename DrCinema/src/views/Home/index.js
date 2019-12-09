import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { updateAuthentication } from '../../actions/authenticationActions';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.props.updateAuthentication();
  }

  render() {
    return (
      <Text>ASDF</Text>
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

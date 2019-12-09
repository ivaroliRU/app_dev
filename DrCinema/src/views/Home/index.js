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
      <View style={{flex: 1, flexDirection: 'column'}}>
      <TouchableOpacity onPress={}><Image style={{width: '50%', height: '50%'}} source={{uri: cinemaPhoto}} ></Image></TouchableOpacity>
      <TouchableOpacity onPress={}><Image style={{width: '50%', height: '50%'}} source={{uri: upcomeingPhoto}} ></Image></TouchableOpacity>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);

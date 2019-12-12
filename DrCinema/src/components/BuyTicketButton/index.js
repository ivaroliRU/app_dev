import React from 'react';
import { Text, TouchableOpacity, Button, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import {withNavigation} from 'react-navigation'
import styles from './styles';


class BuyTicketButton  extends React.Component  {
  constructor (props) {
    super(props);

    this.state = {
      selectedIndex: 0
    }

    this.updateIndex = this.updateIndex.bind(this)

    console.log(this.props);
    
    this.times = this.props.showtimes.schedule.map((t) => t.time);
    this.urls = this.props.showtimes.schedule.map((t) => t.purchase_url);
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {
    return( 
    <View>
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={this.state.selectedIndex}
        buttons={this.times}
        containerStyle={{height: 100}}
      />
      <Button
          title="Buy Ticket"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
    </View>
    );
  }
};

export default BuyTicketButton;
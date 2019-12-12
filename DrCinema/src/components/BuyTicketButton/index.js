import React from 'react';
import { Text, TouchableOpacity, Button, View, Linking } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import {withNavigation} from 'react-navigation'
import styles from './styles';


class BuyTicketButton  extends React.Component  {
  constructor (props) {
    super(props);

    this.state = {
      selectedIndex: 0
    }

    this.updateIndex = this.updateIndex.bind(this);
    this.handleBuyTicket = this.handleBuyTicket.bind(this);

    this.times = this.props.showtimes.schedule.map((t) => t.time);
    this.urls = this.props.showtimes.schedule.map((t) => t.purchase_url);
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  handleBuyTicket(){
    const url = this.urls[this.state.selectedIndex];
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  }

  render() {
    return( 
    <View style={styles.container}>
      <Text>Buy a ticket!</Text>
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={this.state.selectedIndex}
        buttons={this.times}
        containerStyle={styles.buttonGContainer}
        buttonStyle={styles.button}
        selectedButtonStyle={styles.selected}
      />
      <View style={styles.buyButton}>
        <Button
          title="Buy Ticket"
          onPress={() => this.handleBuyTicket()}
        />
      </View>
    </View>
    );
  }
};

export default BuyTicketButton;
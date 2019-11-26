import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import styles from './styles';
import { withNavigation } from 'react-navigation';

class Board extends React.Component {
    render() {
<<<<<<< HEAD
=======
    console.log(this.props.board.id);
    const {navigate} = this.props.navigation;
>>>>>>> a2c12e3239a91582881421afcaba429ccd175094
        return (
            <Card style={styles.card}>
                <CardImage 
                    source={{uri: this.props.board.thumbnailPhoto}}
                    resizeMode="cover"
                    style={styles.cardImage}
                />
                <CardTitle 
                    title={this.props.board.name}
                />
                <CardAction 
                    separator={true} 
                    inColumn={false}>
                        <CardButton
<<<<<<< HEAD
                        // cardId = {this.props.id}
                        onPress={() => this.props.navigation.navigate('Board')}
=======
                        id = {this.props.id}
                        onPress={() => this.props.navigation.navigate('Board', {board:this.props.board})}
>>>>>>> a2c12e3239a91582881421afcaba429ccd175094
                        title="Open"
                        color="blue"
                        />
                        <CardButton
                        onPress={() => {}}
                        title="Delete"
                        color="red"
                        />
                </CardAction>
            </Card>
        );
    }
}

export default withNavigation(Board);
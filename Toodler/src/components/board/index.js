import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import styles from './styles';
import { withNavigation } from 'react-navigation';

class Board extends React.Component {
    render() {
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
                        // cardId = {this.props.id}
                        onPress={() => this.props.navigation.navigate('Board')}
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
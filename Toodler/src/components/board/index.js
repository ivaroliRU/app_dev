import React from 'react';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
//import styles from './styles';

class Board extends React.Component {
    render() {
        return (
            <Card
                title='HELLO WORLD'>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
            </Card>
        );
    }
}

export default Board;
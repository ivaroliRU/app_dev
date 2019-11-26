import React from 'react';
import {View, TextInput} from 'react-native';

class inputBoardName extends React.Component {

    state = {
        name: ''
    }

    render () {
        return(
                <TextInput
                    placeholder = 'Enter the name of your board.'
                    value = {this.state.name}
                    autoCapitalize="sentences"
                    autoCompleteType="name"
                    onChangeText= { text => { this.state.name = text}}>
                </TextInput>
        )
    }
};

export default inputBoardName;
import React from 'react';
import {View, TextInput} from 'react-native';

class inputBoardName extends React.Component {

    state = {
        name: '',
        image: ''
    }

    render () {
        return(
            <View>
                <TextInput
                    placeholder = 'Enter the name of your board.'
                    autoCapitalize="sentences"
                    autoCompleteType="name"
                    onChangeText={(input) => this.setState({name: input})}>
                </TextInput>
                <TextInput
                    placeholder = 'Insert Image URI'
                    onChangeText={(text) => this.setState({image: text})}>
                </TextInput>
            </View>
        )
    }
};

export default inputBoardName;
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

class UpcomingMovieList extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        var id = 0;
        return (
            <View>
                {this.props.upcomingMovies.map((l) => (
                    <View style={{flex: 1, flexDirection: 'row', width: '100%', height: '50%' }}>
                        <TouchableOpacity style={{width: '100%', height:'100%'}} onPress={() => console.log(l)}>
                            <Text>{l.title}</Text>
                            <Image style={{width: '100%', height: '100%'}} source={{uri: l.poster}}></Image>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        );
    }
}

export default UpcomingMovieList;

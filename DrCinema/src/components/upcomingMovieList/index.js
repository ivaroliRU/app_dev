import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

class UpcomingMovieList extends React.Component {
    constructor (props) {
        super(props);

        this.transformData = this.transformData.bind(this);
    }

    transformData(){
        var transformed = [];
        var i = 0, length = this.props.upcomingMovies.length;
        
        while(i < length){
            let sublist = [];
            sublist.push(this.props.upcomingMovies[i]);
            i++;

            if(i < length){                
                sublist.push(this.props.upcomingMovies[i]);
                i++;
            }
            transformed.push(sublist);
        }

        return transformed;
    }

    render() {
        var id = 0;
        return (
            <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
                {this.transformData().map((l) => (
                    <View style={{flex: 1, flexDirection: 'row'}} key={id++}>
                        {l.map((c) => (
                            <TouchableOpacity style={{width: '50%', height: 250}} onPress={() => console.log(c)} key={id++}>
                                
                                <Image style={{width: '100%', height: '100%', resizeMode:'cover'}} source={{uri: c.poster}}></Image>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        );
    }
}

export default UpcomingMovieList;

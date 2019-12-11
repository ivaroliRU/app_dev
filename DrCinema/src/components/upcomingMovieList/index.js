import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style';

class UpcomingMovieList extends React.Component {
    constructor (props) {
        super(props);

        this.sortMovies = this.sortMovies.bind(this);
    }

    sortMovies(){
        return this.props.upcomingMovies.sort(function(a,b){
            return new Date(b['release-dateIS']) - new Date(a['release-dateIS']);
          });
    }

    render() {
        var id = 0;

        return (
            <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
                {(this.props.upcomingMovies)?this.sortMovies().reverse().map((l) => (
                    <TouchableOpacity style={{width: '100%', height: 200}} onPress={() => console.log(l)} key={id++}>
                        <View style={{flex: 1, flexDirection: 'row', backgroundColor: (id%2==0)?'#111216':'#0c0d0f'}}>
                            <Image style={{width: '50%', height: '100%', resizeMode:'cover'}} source={{uri: l.poster}}></Image>
                            <View style={styles.infoContainer}>
                                <Text  style={styles.infoHeader}>{l.title}</Text>
                                {(l['release-dateIS'])?<Text style={styles.info}>Release date(IS): {l['release-dateIS']}</Text>:null}
                                <Text style={styles.info}>Genres: {l.genres.map((g)=>(g + ", "))}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )):null}
            </View>
        );
    }
}

export default UpcomingMovieList;

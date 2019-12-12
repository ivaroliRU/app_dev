import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './style';

class UpcomingMovieList extends React.Component {
    constructor (props) {
        super(props);

        this.sortMovies = this.sortMovies.bind(this);
        this.setDate = this.setDate.bind(this);
    }

    setDate(){        
        for(var i in this.props.upcomingMovies){
            if(this.props.upcomingMovies[i].hasOwnProperty('release-dateIS')) {
                this.props.upcomingMovies[i].release = this.props.upcomingMovies[i]['release-dateIS']
            }
            else if(this.props.upcomingMovies[i].omdb.length > 0){
                this.props.upcomingMovies[i].release = this.props.upcomingMovies[i].omdb[0].Released
            }               
        }
    }

    sortMovies(){
        return this.props.upcomingMovies.sort(function(a,b){
            return new Date(b.release) - new Date(a.release);
          });
    }

    render() {
        var id = 0;
        this.setDate();

        return (
            <View style={{flex: 1, flexDirection: 'column', width: '100%'}}>
                {(this.props.upcomingMovies)?this.sortMovies().map((l) => (
                    <TouchableOpacity style={{width: '100%', height: 200}} onPress={() => this.props.navigation.navigate('MovieDetails', {movie: l, cinema:this.props.cinema, duration: l.durationMinutes})} key={id++}>
                        <View style={{flex: 1, flexDirection: 'row', backgroundColor: (id%2==0)?'#111216':'#0c0d0f'}}>
                            <Image style={{width: '50%', height: '100%', resizeMode:'cover'}} source={{uri: l.poster}}></Image>
                            <View style={styles.infoContainer}>
                                <Text  style={styles.infoHeader}>{l.title}</Text>
                                <Text style={styles.info}>Release date(IS): {l.release}</Text>
                                <Text style={styles.info}>Genres: {l.genres.map((g)=>("\n" + g.Name + ", "))}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )):null}
            </View>
        );
    }
}

export default withNavigation(UpcomingMovieList);

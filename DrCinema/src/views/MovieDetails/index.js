import React from 'react';
import { StyleSheet, View, Text, WebView, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import styles from './style'
import { connect } from 'react-redux';
import BuyTicketButton from '../../components/BuyTicketButton';
import MovieHeader from '../../components/movieHeader';

class MovieDetails extends React.Component {
  constructor (props) {
    super(props);
    this.movie = this.props.navigation.state.params.movie;
    this.cinema = this.props.navigation.state.params.cinema;
    this.duration = this.props.navigation.state.params.duration;

    this.setData = this.setData.bind(this);

    this.setData(); 
  }

  setData(){
    if(this.movie.trailers.length != 0 && this.movie.trailers[0].results.length){
      this.trailer = this.movie.trailers[0].results[0].url;
    }

    if(this.movie.hasOwnProperty('plot')) {
      this.plot = this.movie.plot
    }
    else if(!this.movie.hasOwnProperty('plot') && this.movie.omdb.length > 0){
      this.plot = this.movie.omdb[0].Plot
    }

    if(this.movie.hasOwnProperty('release-dateIS')) {
      this.release = this.movie['release-dateIS']
    }
    else if(this.movie.omdb.length > 0){
      this.release = this.movie.omdb[0].Released
    }
  }

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#16171b', flex:1}}>
        <ScrollView styles={{backgroundColor: '#16171b'}}>
          <MovieHeader movie={{trailer:this.trailer, poster:this.movie.poster}} />
          <Text style={styles.textTitle}>{this.movie.title}</Text>
          <Text style={styles.textRelease}>Release: {this.release}</Text>
          {this.duration? <Text style={styles.textRelease}>Duration: {this.duration}min </Text>: <React.Fragment></React.Fragment>}
          {this.movie.omdb.length != 0?
          <React.Fragment>
            <Text style={styles.textInformation}>{this.plot}</Text>
            <Text style={styles.textInformation}>{this.movie.omdb[0].Genre}</Text>
          </React.Fragment>:
            <Text style={styles.textInformation}>{this.plot}</Text>
          }
          {this.cinema && <BuyTicketButton showtimes={this.movie.showtimes.find(element => element.cinema.id == this.cinema.id)} />}
        </ScrollView>
      </SafeAreaView>
    )
  }
};


function mapStateToProps(state){
    return{
      authentication: state.authentication
    };
  }

const mapDispatchToProps = dispatch => {
    return {
        updateAuthentication: () => {
        dispatch(updateAuthentication());
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
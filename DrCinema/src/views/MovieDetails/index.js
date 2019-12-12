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

    if(this.movie.trailers.length != 0 && this.movie.trailers[0].results.length){
      this.trailer = this.movie.trailers[0].results[0].url;
    }

    this.release = (this.movie["release-dateIS"])?this.movie["release-dateIS"]:this.movie.omdb.Released;
    this.plot = this.movie.hasOwnProperty('plot')?this.movie.plot:this.movie.omdb.Plot; 
    
    console.log(this.release);
    
  }

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#16171b', flex:1}}>
        <ScrollView styles={{backgroundColor: '#16171b'}}>
          <MovieHeader movie={{trailer:this.trailer, poster:this.movie.poster}} />
          <Text style={styles.textTitle}>{this.movie.title}</Text>
          <Text style={styles.textRelease}>Release: {this.release}</Text>
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
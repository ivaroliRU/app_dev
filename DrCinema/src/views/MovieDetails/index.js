import React from 'react';
import { StyleSheet, View, Text, WebView, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import BuyTicketButton from '../../components/BuyTicketButton';

class MovieDetails extends React.Component {
  constructor (props) {
    super(props);
    this.movie = this.props.navigation.state.params.movie;
    this.cinema = this.props.navigation.state.params.cinema;
  }

  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#16171b'}}>
          {this.movie.trailers.length != 0?
            this.movie.trailers[0].results.length != 0?
              <View style={{width: '100%', height: '40%'}}> 
                <WebView
                  style={{flex: 0, width: '100%', height: '100%'}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{ uri: this.movie.trailers[0].results[0].url }}
                />
              </View>:
              <View style={{width: '100%', height: '40%'}}>                   
                <Image style={{width: '100%', height: '100%', resizeMode:'cover'}} source={{uri: this.movie.poster}}></Image>
              </View>
            :
            <View style={{width: '100%', height: '40%'}}>                   
              <Image style={{width: '100%', height: '100%', resizeMode:'cover'}} source={{uri: this.movie.poster}}></Image>
            </View>
          }
          <Text style={{textAlign: "center", alignContent: "center", fontSize: 20, color: '#fff', marginTop: 5}}>{this.movie.title}</Text>
          <Text style={{textAlign: "center", alignContent: "center",color: '#fff', margin: 5}}>Release: {this.movie["release-dateIS"]}</Text>
          {this.movie.omdb.length != 0?
          <React.Fragment>
            {this.movie.hasOwnProperty('plot')?
              <Text style={{textAlign: "center", alignContent: "center",color: '#fff', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5}}>{this.movie.plot}</Text>:
              <Text style={{textAlign: "center", alignContent: "center",color: '#fff', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5}}>{this.movie.omdb.Plot}</Text>
            }
            <Text style={{textAlign: "center", alignContent: "center",color: '#fff', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5}}>{this.movie.omdb[0].Genre}</Text>
          </React.Fragment>:
        <Text style={{textAlign: "center", alignContent: "center",color: '#fff', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5}}>{this.movie.plot}</Text>
        }
        <BuyTicketButton showtimes={this.movie.showtimes.find(element => element.cinema.id == this.cinema.id)} />
        </View>
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
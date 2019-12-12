import React from 'react';
import { StyleSheet, View, Text, WebView, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import styles from './style'
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
      <ScrollView styles={{backgroundColor: '#16171b'}}>
          <View styles={styles.container}>
          {this.movie.trailers.length != 0?
            this.movie.trailers[0].results.length != 0?
              <View style={styles.headerImageContainer}> 
                <WebView
                  style={styles.headerWebView}
                  scrollEnabled={false}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{ uri: this.movie.trailers[0].results[0].url }}
                />
              </View>:
              <View style={styles.headerImageContainer}>                   
                <Image style={styles.headerImage} source={{uri: this.movie.poster}}></Image>
              </View>
            :
            <View style={styles.headerImageContainer}>                   
              <Image style={styles.headerImage} source={{uri: this.movie.poster}}></Image>
            </View>
          }
          <Text style={styles.textTitle}>{this.movie.title}</Text>
          <Text style={styles.textRelease}>Release: {this.movie["release-dateIS"]}</Text>
          {this.movie.omdb.length != 0?
          <React.Fragment>
            {this.movie.hasOwnProperty('plot')?
              <Text style={styles.textInformation}>{this.movie.plot}</Text>:
              <Text style={styles.textInformation}>{this.movie.omdb.Plot}</Text>
            }
            <Text style={styles.textInformation}>{this.movie.omdb[0].Genre}</Text>
          </React.Fragment>:
        <Text style={styles.textInformation}>{this.movie.plot}</Text>
        }
        <BuyTicketButton showtimes={this.movie.showtimes.find(element => element.cinema.id == this.cinema.id)} />
        </View>
        </ScrollView>
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
import React from 'react';
import { Text, TouchableOpacity, ImageBackground, View, ScrollView, SafeAreaView, Image } from 'react-native';
import { connect } from 'react-redux';
import { updateMovies } from '../../actions/moviesActions';
import styles from './styles';
import CinemaInformation from '../../components/cinemaInformation';
import UpcomingMovieList from '../../components/upcomingMovieList';

const cinemaPhoto = 'https://en.balsan.com/sites/default/files/media/inspiration_slides/201902/vmaxsphera50.jpg';
var id = 0;

class CinemaDetails extends React.Component {
  constructor (props) {
    super(props);

    const { navigation } = this.props;
    this.cinema = navigation.getParam('cinema' , 'NO-ID');

    id = this.cinema.id;

    this.state = {
      modalVisible: false
    };
  }

  componentDidMount(){
    this.props.updateMovies(this.props.token);
  }

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#020302', flex:1 }}>
          <ScrollView>
              <Image
                style={{width: '100%', height: 250}}
                source={{uri:cinemaPhoto}}
              />
              <CinemaInformation cinema={this.cinema} />

              <Text style={{paddingLeft: 10, fontSize: 20, color: "#FFF"}} >Available movies</Text>
              <UpcomingMovieList upcomingMovies={this.props.movies} />
          </ScrollView>
      </SafeAreaView>
    )
  }
};

function mapStateToProps(state){
  return{
    token: state.authentication,
    movies: state.movies.filter(m => m.showtimes.filter(t => t.cinema.id == id).length > 0)
  }; 
}

const mapDispatchToProps = dispatch => {
  return {
      updateMovies: (token) => {dispatch(updateMovies(token));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CinemaDetails);

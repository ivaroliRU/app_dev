import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-material-ui';

class MovieDetails extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
        <View style={[styles.container, { backgroundColor: '#1B1B1B' }]}>
            <View style={[styles.item, styles.title]}>
                <Text style={[styles.text, styles.titleText]}>Title</Text>
            </View>
              <View style={styles.line}>
                <View style={[styles.item, styles.year]}>
                  <Icon
                    style={[styles.icon, styles.yearIcon]}
                    name="md-calendar"
                    color="white"
                  />
                  <Text style={[styles.text, styles.yearText]}>Year</Text>
                </View>
                <View style={[styles.item, styles.duration]}>
                  <Icon
                    style={[styles.icon, styles.durationIcon]}
                    name="md-time"
                    color="white"
                  />
                  <Text style={[styles.text, styles.durationText]}>Runtime</Text>
                </View>
              </View>
              <View style={styles.line}>
                <View style={[styles.item, styles.genre]}>
                  <Text style={[styles.text, styles.genreText]}>Genres</Text>
                </View>
              </View>
            </View>
          );
        }
    }

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  line: {
    flexDirection: 'row',
  },

  item: {
    flexDirection: 'row',
    marginRight: 15,
  },

  icon: {
    marginRight: 5,
  },

  text: {
    color: 'white',
    fontSize: 16,
  },

  titleText: {
    fontSize: 24,
  },

  year: {
  },

  yearText: {
  },

  duration: {
  },

  durationText: {
  },

  genreText: {
  },
});

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
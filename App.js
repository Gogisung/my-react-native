import React, { Component }from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = '';

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        // this.setState({
        //   error: 'Something went wrong'
        // })
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error:error
        })
      }
    );
  }
  _getWeather= (lat, long) => {
    fetch()
    .then((res) => {
      res.json()
    }).then((json) => {
      console.log(json);
    }).catch((err) => {
      console.log(err);
      console.log(err);
    })
  }
  render() {
    const { isLoaded, error, temperature } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather temp={Math.floor(temperature - 273.15)} />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});

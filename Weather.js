import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

function Weather({ temp }) {
  return (
    <LinearGradient
      colors={["#00C6FB", "#005BEA"]}
      styles={styles.container}
    >
      <View>
        <Ionicons color="white" size={144} name="ios-rainy"/>
        <Text style={styles.temp}>{temp}도</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>Raining like a MF</Text>
        <Text style={styles.subtitle}>For more info look outside</Text>
      </View>
    </LinearGradient>
  )
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems:'flex-start',
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title:{
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});

export default Weather;
import React from 'react';
import {ActivityIndicator, TouchableWithoutFeedback, StyleSheet, View} from 'react-native';

const Loader = () => {

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
  }
});
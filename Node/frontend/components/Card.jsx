import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  const { children, style } = props;

  return(
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#ffffff',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    borderRadius: 5,
  }
});
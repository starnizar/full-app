import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

const MyScrollView = props => {
  const { children } = props;

  return(
    <View style={styles.scrollWrapper}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {children}
      </ScrollView>
    </View>
  )
}

export default MyScrollView;

const styles = StyleSheet.create({
  scrollWrapper: {
    flex: 1,
    width: '100%',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 10,
  }
});
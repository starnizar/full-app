import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import {showFormModal} from '../redux/action';

const AddPostButton = props => {
  const { tintColor } = props;
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(showFormModal())}>
      <Text style={[styles.buttonText, { color: tintColor }]}>New post</Text>
    </TouchableOpacity>
  );
};

export default AddPostButton;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
  },
});
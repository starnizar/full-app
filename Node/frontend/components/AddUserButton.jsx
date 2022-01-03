import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import {showFormModal} from '../redux/action';

const AddUserButton = props => {
  const { tintColor } = props;
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(showFormModal())}>
      <Text style={[styles.buttonText, { color: tintColor }]}>Add user</Text>
    </TouchableOpacity>
  );
};

export default AddUserButton;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
  },
});
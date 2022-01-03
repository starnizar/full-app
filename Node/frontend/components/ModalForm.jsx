import React from 'react';
import { Modal, View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import {hideFormModal} from "../redux/action";

const ModalForm = props => {
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.modals);

  const addButtonHandler = () => {

  };

  return (
    <Modal
      animationType="fade"
      visible={isModal}
      transparent
    >
      <View style={styles.container}>
        <Card>

          <TextInput />

          <TextInput />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity activeOpacity={0.5} style={[styles.button, styles.buttonCancel]} onPress={() => dispatch(hideFormModal())}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.5} style={[styles.button, styles.buttonAdd]} onPress={() => dispatch(hideFormModal())}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>

        </Card>
      </View>
    </Modal>
  );
};

export default ModalForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000019',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    alignItems: 'center',
    width: 100,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonCancel: {
    backgroundColor: '#f1d000',
  },
  buttonAdd: {
    backgroundColor: '#25c200',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
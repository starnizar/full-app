import React, {useState} from 'react';
import { Modal, View, TextInput, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import {hideFormModal} from "../redux/action";

const ModalForm = props => {
  const { inputs, submitHandler } = props;
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.modals);
  const [isProcessing, setIsProcessing] = useState(false);
  const [inputValue, setInputValue] = useState({});

  const cancelButtonHandler = () => {
    setInputValue({});
    dispatch(hideFormModal());
  };

  const addButtonHandler = (data) => {
    setIsProcessing(true);
    submitHandler(data);
    setIsProcessing(false);
    setInputValue({});
    dispatch(hideFormModal());
  };

  const changeInputHandler = (name, value) => {
    setInputValue((prev) => ({
      ...prev,
      [name]: value
    }))
  };

  return (
    <Modal
      animationType="fade"
      visible={isModal}
      transparent
    >
      <View style={styles.container}>
        <Card>

          {inputs && inputs.map((input) => (
            <TextInput
              key={input}
              name={input}
              value={inputValue[input]}
              onChangeText={(value) => changeInputHandler(input, value)}
              style={styles.input}
              placeholder={input}
              placeholderColor="#dddddd"
              multiline
            />
          ))}

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.button, styles.buttonCancel]}
              onPress={cancelButtonHandler}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.button, styles.buttonAdd]}
              onPress={addButtonHandler.bind(this, inputValue)}
            >
              {isProcessing ? <ActivityIndicator /> : <Text style={styles.buttonText}>Add</Text>}
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
  input: {
    backgroundColor: '#eeeeee',
    marginBottom: 15,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    color: '#424242',
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
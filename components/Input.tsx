import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type InputTypes = {
  value: string | number | null;
  setValue: (e: string | number) => void;
  placeholder: string;
  increaseValue: () => void;
  decreaseValue: () => void;
};

const Input = ({
  value,
  setValue,
  placeholder,
  increaseValue,
  decreaseValue,
}: InputTypes) => {
  return (
    <View style={styles.wrapper}>
      <Text>{placeholder}</Text>
      <View style={styles.inputWrapper}>
        <TouchableOpacity style={styles.button} onPress={decreaseValue}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          onChangeText={val => setValue(Number(val))}
          value={value?.toString()}
          placeholder={placeholder}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={increaseValue}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    maxHeight: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    maxHeight: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'transparent',
    maxHeight: 60,
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    padding: 10,
    fontSize: 30,
    maxHeight: 40,
    maxWidth: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: 'bold',
    lineHeight: 15,
  },
});

export default Input;

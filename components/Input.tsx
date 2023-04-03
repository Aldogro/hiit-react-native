import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {InputStyles as styles} from '../Styles';

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

export default Input;

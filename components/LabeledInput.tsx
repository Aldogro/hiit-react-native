import React from 'react';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LabeledInputStyles as styles} from '../Styles';

const LabeledInput = ({
  label,
  value,
  onChange,
  keyboardType,
}: {
  label: string;
  value: string;
  onChange: any;
  keyboardType?: KeyboardTypeOptions;
}) => {
  const rest = () => {
    onChange(Number(value) - 1);
  };

  const add = () => {
    onChange(Number(value) + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        {!keyboardType && (
          <TouchableOpacity onPress={rest}>
            <Text style={styles.iconButton}>-</Text>
          </TouchableOpacity>
        )}
        <TextInput
          style={styles.textInput}
          value={value}
          keyboardType={keyboardType || 'numeric'}
          onChangeText={onChange}
        />
        {!keyboardType && (
          <TouchableOpacity onPress={add}>
            <Text style={styles.iconButton}>+</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default LabeledInput;

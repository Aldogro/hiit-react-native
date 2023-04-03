import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

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
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        {!keyboardType && (
          <TouchableOpacity onPress={() => onChange(Number(value) - 1)}>
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
          <TouchableOpacity onPress={() => onChange(Number(value) + 1)}>
            <Text style={styles.iconButton}>+</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 7,
  },
  label: {
    textAlign: 'center',
  },
  inputWrapper: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#444444',
    borderRadius: 12,
    textAlign: 'center',
  },
  iconButton: {
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    minWidth: 40,
    borderRadius: 30,
    fontSize: 14,
  },
});

export default LabeledInput;

import React from 'react';
import { View, Text, TextInput as RNTextInput, TextInputProps, StyleSheet } from 'react-native';

type InputProps = TextInputProps & {
  label?: string;
  lightColor?: string;
  darkColor?: string;
};

export const TextInput: React.FC<InputProps> = ({
  label,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        style={[styles.input, style]}
        placeholderTextColor="#999"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12, // gap entre label e input
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
  },
});

import React from "react";
import {
  View,
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";
import { Text } from "@/components/Themed";
import Colors from "@/constants/Colors";

type InputProps = TextInputProps & {
  label?: string;
  lightColor?: string;
  darkColor?: string;
};

export const CurrencyInput: React.FC<InputProps> = ({
  label,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <Text fontSize={16} weight="700Bold" style={styles.prefix}>
          R$
        </Text>
        <RNTextInput
          style={[styles.input, style]}
          placeholderTextColor="#999"
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    marginVertical: 8,
      //  backgroundColor: "#f1f1f1",
          borderRadius: 8,
        
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 12, // gap entre label e input
  },
  inputWrapper: {
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    
  },
  prefix: {
    marginRight: 8,
  },
  input: {
    flex: 1, // Faz o input ocupar o espaço restante
    fontSize: 16,
    color: Colors.light.tint,
    textAlign: "right",
    paddingRight: 0,
    fontFamily: "Inter_700Bold",
  },
});

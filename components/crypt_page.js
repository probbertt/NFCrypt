import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CryptScreen() {
  const [message, setMessage] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("aes");

  const cryptMessage = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your message"
        value={message}
        onChangeText={setMessage}
      />

      <Text>Select Crypt Method:</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedMethod}
          onValueChange={(itemValue, itemIndex) => setSelectedMethod(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="AES" value="aes" />
          <Picker.Item label="DES" value="des" />
          <Picker.Item label="Triple DES" value="3des" />
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={cryptMessage}>
          <Text style={styles.buttonText}>Crypt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light grey background
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: "#000", // Default text color
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#000", // Default input border color
    borderWidth: 1,
    borderRadius: 5, // Slightly rounded corners for the input
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  pickerContainer: {
    width: "80%",
    borderColor: "#000",
    overflow: "hidden", // Ensures iOS picker style respects borderRadius
  },
  picker: {
    width: "100%",
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 20, // Rounded corners for the button container
    overflow: "hidden", // Ensures the TouchableOpacity's ripple effect is contained
  },
  button: {
    backgroundColor: "#007AFF", // Default blue color for buttons
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 16,
    textAlign: "center",
  },
});

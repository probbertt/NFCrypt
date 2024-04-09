import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";

export default function WriteScreen() {
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={{ ...styles.input, height: 200 }}
        placeholder="Enter your message"
        value={message}
        onChangeText={setMessage}
      />
      <Text style={styles.label}>Encrypted Message:</Text>
      <TextInput
        style={{ ...styles.input, height: 200 }}
        placeholder="your encrypted message will be displayed here..."
        value={encryptedMessage}
        onChangeText={() => {}}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Implement encryption logic here
          setEncryptedMessage(message);
        }}
      >
        <Text style={styles.buttonText}>Crypt</Text>
      </TouchableOpacity>
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

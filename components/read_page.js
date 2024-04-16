import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import NfcManager, { NfcTech } from "react-native-nfc-manager";

export default function ReadScreen() {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const [statusMessage, setStatusMessage] = useState("Ready to scan...");

  // NfcManager.setEventListener(NfcTech.Ndef, (tag) => {
  //   setStatusMessage("Tag found!");
  //   console.log(tag);
  //   NfcManager.unregisterTagEvent().catch((err) => console.warn(err));
  // });

  const startPulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startPulse();

    setStatusMessage("Scanning for NFC tags...");
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.pulseCircle, { transform: [{ scale: pulseAnim }] }]}
      />
      <Text style={styles.instructions}>
        Hold your device near the NFC tag.
      </Text>
      <Text style={styles.statusMessage}>{statusMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  pulseCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "blue",
    opacity: 0.5,
    marginBottom: 20,
  },
  instructions: {
    marginTop: 20,
    fontSize: 14,
    color: "gray",
  },
  statusMessage: {
    marginTop: 10,
    fontSize: 16,
    color: "gray",
  },
});

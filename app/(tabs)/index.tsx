import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

// Using Picsum Photos for placeholder images in development
const PLACEHOLDER_IMAGE_URL = "https://picsum.photos/id/1/200/200";

export default function HomeScreen() {
  // Set up a state variable for hold the name
  const [name, setName] = useState("Poom");

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: PLACEHOLDER_IMAGE_URL }}
        style={styles.profileImage}
      />
      {/* Display the name from state */}
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.bioText}>React Native Developer</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={setName} // Update the state when text changes
        value={name} // The vaule of the input is controlled by our state
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Changed background for better contrast
    alignItems: "center",
    justifyContent: "center",
    padding: 20, // Add some padding around the screen
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of width/height to make it a circle
    marginBottom: 20, // Add space below the image
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bioText: {
    fontSize: 16,
    color: "gray",
    marginTop: 8, // Add space above the bio
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%", // Take up 80% of the container width
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
  },
});

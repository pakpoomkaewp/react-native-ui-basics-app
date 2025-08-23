import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// Using Picsum Photos for placeholder images in development
const PLACEHOLDER_IMAGE_URL = "https://picsum.photos/id/1/200/200";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: PLACEHOLDER_IMAGE_URL }}
        style={styles.profileImage}
      />
      <Text>Hello, Poom!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of width/height to make it a circle
    marginBottom: 20, // Add space below the image
  },
});

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
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

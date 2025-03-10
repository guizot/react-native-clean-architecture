import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="alert-circle-outline" size={50} color="black" />
      <Text style={styles.text}>Screen Not Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default NotFoundScreen;
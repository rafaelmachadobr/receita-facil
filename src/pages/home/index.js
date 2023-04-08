import { View, Text, StyleSheet } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Página Home!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f00",
  },
});

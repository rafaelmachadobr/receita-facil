import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { FoodList } from "../../components/foodlist";
import api from "../../services/api";

export function Search() {
  const route = useRoute();
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    async function fetchReceipes() {
      const response = await api.get(`/foods?name_like=${route.params?.name}`);
      setReceipes(response.data);
    }

    fetchReceipes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.text}>Nenhum resultado encontrado</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  text: {
    fontSize: 16,
  },
});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/home";
import { Favorites } from "../pages/favorites";

import { Ionicons } from "@expo/vector-icons";

const tab = createBottomTabNavigator();

export function Routes() {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
        },
      }}
    >
      <tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color="#000" />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" size={size} color="#ff4141" />;
            }
            return <Ionicons name="heart-outline" size={size} color={color} />;
          },
        }}
      />
    </tab.Navigator>
  );
}

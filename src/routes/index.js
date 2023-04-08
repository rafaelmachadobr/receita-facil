import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/home";
import { Search } from "../pages/search";
import { Favorites } from "../pages/favorites";

const tab = createBottomTabNavigator();

export function Routes() {
  return (
    <tab.Navigator>
      <tab.Screen name="Home" component={Home} />
      <tab.Screen name="Search" component={Search} />
      <tab.Screen name="Favorites" component={Favorites} />
    </tab.Navigator>
  );
}

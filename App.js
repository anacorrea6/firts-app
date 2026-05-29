import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import BottomTabNavigator from "./src/navigation/bottom_tab_navigation";
import DrawerNavigator from "./src/navigation/screens-classroom/drawer_navigation";
import StackNavigatior from "./src/navigation/stackNavigatior";

export default function app() {
  return (
    <NavigationContainer>
      {/* <StackNavigatior */}
      {/* <BottomTabNavigator/> */}
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
});


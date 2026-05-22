import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./src/navigation/stackNavigation";
import BottomTabNavigator from "./src/navigation/bottom_tab_navigation";
import DrawerNavigator from "./src/navigation/screens-classroom/drawer_navigation";

export default function app() {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
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

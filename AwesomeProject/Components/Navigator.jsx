import Registration from "../Screens/RegistrationScreen";
import Login from "../Screens/LoginScreen";
import Home from "../Screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Navigator = () => {
  const MainStack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Публікації",
          headerLeft: () => {
            <View></View>;
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name="export"
              size={24}
              color="#aaa"
              style={styles.exitIcon}
              onPress={() => navigation.navigate("Login")}
            />
          ),
        }}
      />
    </MainStack.Navigator>
  );
};

const styles = StyleSheet.create({
  exitIcon: {
    marginRight: 10,
    color: "#BDBDBD",
  },
});

export default Navigator;

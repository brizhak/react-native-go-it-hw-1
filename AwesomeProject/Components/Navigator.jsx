import Registration from "../Screens/RegistrationScreen";
import Login from "../Screens/LoginScreen";
import Home from "../Screens/Home";
import Comments from "../Screens/CommentsScreen";
import CreatePosts from "../Screens/CreatePostsScreen";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity } from "react-native";

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
      <MainStack.Screen name="Create" component={CreatePosts} />
      <MainStack.Screen
        name="Comments"
        component={Comments}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("Posts")}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={24}
                color="#aaa"
                onPress={() => navigation.navigate("Posts")}
              />
            </TouchableOpacity>
          ),
          headerTitle: "Коментарі",
          headerTitleStyle: {
            fontWeight: 500,
            color: "#212121",
            fontSize: 17,
          },
          headerStyle: {
            backgroundColor: "#FFFFFF",
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowOffset: {
              width: 0,
              height: 0.5,
            },
            shadowRadius: 0,
          },
        }}
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
          headerShown: false,
          // headerTitle: "Публікації",
          // headerLeft: () => {
          //   <View></View>;
          // },
          // headerRight: () => (
          //   <MaterialCommunityIcons
          //     name="export"
          //     size={24}
          //     color="#aaa"
          //     style={styles.exitIcon}
          //     onPress={() => navigation.navigate("Login")}
          //   />
          // ),
        }}
      />
      {/* <MainStack.Screen
        name="Posts"
        component={Posts}
        options={{
          headerShown: false,
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
      /> */}
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

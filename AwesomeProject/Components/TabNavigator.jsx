import Posts from "../Screens/PostsScreen";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CreatePosts from "../Screens/CreatePostsScreen";
import Profile from "../Screens/ProfileScreen";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          display: route.name === "Create" ? "none" : "flex",
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#e91e63",
      })}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name={"view-grid-outline"}
              size={25}
              color="#aaa"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePosts}
        options={{
          headerTitle: "Створити публікацію",
          tabBarIcon: () => (
            <MaterialCommunityIcons name={"plus"} size={20} color="white" />
          ),
          tabBarIconStyle: {
            backgroundColor: "#FF6C00",
            borderRadius: 100,
            elevation: 3,
            width: 70,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 5,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name={"account-outline"}
              size={28}
              color="#aaa"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

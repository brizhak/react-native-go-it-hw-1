import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Posts from "../Screens/PostsScreen";
import CreatePosts from "../Screens/CreatePostsScreen";
import Profile from "../Screens/ProfileScreen";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  const getTabBarIcon = (routeName, focused, color) => {
    let iconName;
    let iconColor;

    if (routeName === "Posts") {
      iconName = focused ? "view-grid" : "view-grid-outline";
      iconColor = focused ? "#FF6C00" : color;
    } else if (routeName === "Create") {
      iconName = "plus";
      iconColor = "#FFFFFF";
    } else if (routeName === "Profile") {
      iconName = focused ? "account" : "account-outline";
      iconColor = focused ? "#FF6C00" : color;
    }

    return (
      <MaterialCommunityIcons name={iconName} size={25} color={iconColor} />
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          display: route.name === "Create" ? "none" : "flex",
        },
        tabBarShowLabel: false,
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
      })}
    >
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color }) =>
            getTabBarIcon(route.name, focused, color),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate("Login")}
            >
              <MaterialCommunityIcons
                name="export"
                size={24}
                color="#aaa"
                onPress={() => navigation.navigate("Login")}
              />
            </TouchableOpacity>
          ),
          headerTitle: "Публікації",
        })}
      />
      <Tab.Screen
        name="Create"
        component={CreatePosts}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="plus" size={20} color="white" />
          ),
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

          headerTitle: "Створити публікацію",
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
        options={({ route }) => ({
          tabBarIcon: ({ focused, color }) =>
            getTabBarIcon(route.name, focused, color),
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

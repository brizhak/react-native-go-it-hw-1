import Posts from "../Screens/PostsScreen";
import { useNavigation } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CreatePosts from "../Screens/CreatePostsScreen";
import Profile from "../Screens/ProfileScreen";

const TabNavigator = () => {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          display: route.name === "Create" ? "none" : "flex",
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
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
          tabBarIcon: () => (
            <MaterialCommunityIcons name={"plus"} size={20} color="white" />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("Posts")}
            >
              <MaterialCommunityIcons
                name={"arrow-left"}
                size={14}
                color="black"
              />
            </TouchableOpacity>
          ),
          headerTitle: "Створити публікацію",
          headerTitleStyle: {
            fontWeight: 500,
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

import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Posts = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.headerContainer}></View>
        <Text style={styles.headerText}>Публікації</Text>
        <View>
          <MaterialCommunityIcons
            name="export"
            size={24}
            color="#aaa"
            style={styles.exitIcon}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.userPhoto}></View>
        <View style={styles.userDataContainer}>
          <Text style={styles.username}>User</Text>
          <Text style={styles.userEmail}>example@mail</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 88,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
  },
  headerContainer: {
    height: 44,
    width: "100%",
  },
  headerText: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 10,
  },
  exitIcon: {
    marginLeft: "auto",
    marginRight: 10,
    bottom: 22,
  },
  userContainer: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    flexDirection: "row",
    gap: 8,
  },
  userPhoto: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 12,
    borderWidth: 1,
  },
  userDataContainer: {
    flex: 1,
    height: 60,
    justifyContent: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: 13,
  },
  userEmail: {
    fontSize: 11,
  },
});

export default Posts;

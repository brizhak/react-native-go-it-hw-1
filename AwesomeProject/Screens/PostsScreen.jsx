import { Text, View, StyleSheet } from "react-native";

const Posts = () => {
  return (
    <View style={styles.mainContainer}>
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
    height: "100%",
  },
  userContainer: {
    flex: 1,
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

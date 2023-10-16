import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ImagesAssets } from "../posts";

const Posts = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.mainContainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
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
      <View>
        <View style={styles.userContainer}>
          <View style={styles.userPhoto}>
            <Image
              source={require("../images/user-photo.png")}
              style={{ width: 60, height: 60 }}
            />
          </View>
          <View style={styles.userDataContainer}>
            <Text style={styles.username}>User</Text>
            <Text style={styles.userEmail}>example@mail</Text>
          </View>
        </View>
        <View>
          {ImagesAssets.map((image) => (
            <View style={styles.postContainer} key={image.id}>
              <Image source={image.bannerList} style={styles.postPhoto} />
              <Text style={styles.photoTitle}>Ліс</Text>
              <View style={styles.postDetails}>
                <MaterialCommunityIcons
                  name="comment"
                  size={24}
                  color="#FF6C00"
                  onPress={() =>
                    navigation.navigate("Comments", {
                      imageUrl: image.bannerList,
                    })
                  }
                />
                <Text style={{ marginRight: 24 }}>0</Text>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={24}
                  color="#FF6C00"
                />
                <Text>{image.likes}</Text>
                <View style={styles.location}>
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontSize: 16,
                      color: "#212121",
                    }}
                  >
                    Ukraine
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    marginBottom: 32,
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
  postContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
  postPhoto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  photoTitle: {
    marginTop: 8,
    fontSize: 16,
  },
  postDetails: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 32,
    alignItems: "center",
    justifyContent: "space-between",
  },
  location: {
    marginLeft: "auto",
  },
});

export default Posts;

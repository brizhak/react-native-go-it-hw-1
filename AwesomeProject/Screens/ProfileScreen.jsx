import { useNavigation } from "@react-navigation/native";
import { ImageBackground, View, Image, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BGImage from "../images/BGImage.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={BGImage}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={styles.innerContainer}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View style={styles.container}>
          <View>
            <View style={styles.photoContainer}>
              <Image
                source={require("../images/user-photo.png")}
                style={styles.photoCard}
              />

              <View style={styles.buttonX}>
                <MaterialCommunityIcons
                  name="window-close"
                  size={24}
                  color="#aaa"
                  style={styles.xIcon}
                />
              </View>
            </View>
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
          <Text style={styles.userName}>User Name</Text>
          <View style={styles.postContainer}>
            <Image
              source={require("../images/post1.png")}
              style={styles.postPhoto}
            />
            <Text style={styles.photoTitle}>Ліс</Text>
            <View style={styles.postDetails}>
              <MaterialCommunityIcons
                name="comment"
                size={24}
                color="#FF6C00"
                onPress={() =>
                  navigation.navigate("Comments", {
                    imageUrl: "../images/post1.png",
                  })
                }
              />
              <Text style={{ marginRight: 24 }}>23</Text>
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color="#FF6C00"
              />
              <Text>230</Text>
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
          <View style={styles.postContainer}>
            <Image
              source={require("../images/post2.png")}
              style={styles.postPhoto}
            />
            <Text style={styles.photoTitle}>Захід на Чорному морі</Text>
            <View style={styles.postDetails}>
              <MaterialCommunityIcons
                name="comment"
                size={24}
                color="#FF6C00"
                onPress={() =>
                  navigation.navigate("Comments", {
                    imageUrl: "../images/post2.png",
                  })
                }
              />
              <Text style={{ marginRight: 24 }}>16</Text>
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color="#FF6C00"
              />
              <Text>180</Text>
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
          <View style={styles.postContainer}>
            <Image
              source={require("../images/post3.png")}
              style={styles.postPhoto}
            />
            <Text style={styles.photoTitle}>Старий будиночок у Венеції</Text>
            <View style={styles.postDetails}>
              <MaterialCommunityIcons
                name="comment"
                size={24}
                color="#FF6C00"
                onPress={() =>
                  navigation.navigate("Comments", {
                    imageUrl: "../images/post3.png",
                  })
                }
              />
              <Text style={{ marginRight: 24 }}>21</Text>
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color="#FF6C00"
              />
              <Text>215</Text>
              <View style={styles.location}>
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontSize: 16,
                    color: "#212121",
                  }}
                >
                  Italy
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    marginTop: 400,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  photoContainer: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    left: "33.34%",
    borderRadius: 16,
  },
  buttonX: {
    left: 108,
    top: -40,
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  exitIcon: {
    marginLeft: "auto",
    marginRight: 16,
    marginTop: 22,
  },
  xIcon: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  userName: {
    textAlign: "center",
    color: "#212121",
    marginTop: 38,
    marginBottom: 32,
    fontSize: 30,
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

export default Profile;

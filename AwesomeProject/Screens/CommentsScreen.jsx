import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Comments = ({ route }) => {
  const navigation = useNavigation();
  const imageUrl = route.params.imageUrl;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={styles.mainContainer}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View style={styles.mainContainer}>
          <View style={styles.commentsContainer}>
            <View>
              <Image source={imageUrl} style={{ marginBottom: 32 }} />
              <View style={styles.comments}>
                <View style={styles.commentContainer}>
                  <View style={styles.photoContainer} />
                  <View style={styles.textContainer}>
                    <Text style={{ fontSize: 13 }}>
                      Дуже гарне фото! Хочу побачити цей вид наживо!
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#BDBDBD",
                        marginLeft: "auto",
                      }}
                    >
                      09 червня, 2020 | 08:40
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Коментувати..." />
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="arrow-up"
                  size={24}
                  color="#FFFFFF"
                  style={styles.sendIcon}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  commentsContainer: {
    marginTop: 32,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  comments: {
    flexDirection: "column",
    gap: 24,
  },
  commentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  photoContainer: {
    width: 28,
    height: 28,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  textContainer: {
    width: 299,
    backgroundColor: "#F6F6F6",
    paddingBottom: 16,
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    borderRadius: 6,
  },
  inputContainer: {
    flexDirection: "row",
    width: 343,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 8,
    paddingLeft: 16,
    // marginTop: "auto",
  },
  iconContainer: {
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  sendIcon: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Comments;

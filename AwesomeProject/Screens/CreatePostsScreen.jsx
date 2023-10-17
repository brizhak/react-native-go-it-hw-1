import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CreatePosts = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.mainContainer}>
        {/* <View style={styles.header}>
          <View style={styles.headerContainer}></View>
          <View>
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color="#aaa"
              style={styles.goBack}
              onPress={() => navigation.navigate("Posts")}
            />
          </View>
          <Text style={styles.headerText}>Створити публікацію</Text>
        </View> */}
        <View>
          <View style={styles.photoContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="camera"
                size={24}
                color="#aaa"
                style={styles.iconCamera}
                onPress={() => navigation.navigate("Posts")}
              />
            </View>
          </View>
          <Text style={styles.textDownload}>Завантажте фото</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.input}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity style={styles.buttonPublic}>
              <Text style={{ color: "#BDBDBD" }}>Опублікувати</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.deleteContainer}>
            <MaterialCommunityIcons
              name="delete-outline"
              size={24}
              color="#aaa"
              style={styles.iconDelete}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    bottom: 22,
  },
  goBack: {
    marginRight: "auto",
    marginLeft: 10,
    marginTop: 10,
  },
  photoContainer: {
    height: 240,
    width: 343,
    backgroundColor: "#F6F6F6",
    marginTop: 32,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 100,
  },
  iconCamera: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textDownload: {
    paddingLeft: 16,
    paddingTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  input: {
    height: 50,
    fontSize: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  buttonPublic: {
    width: 343,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteContainer: {
    marginTop: 120,
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  iconDelete: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default CreatePosts;

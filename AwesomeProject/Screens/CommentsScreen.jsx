import { useNavigation } from "@react-navigation/native";
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
const Comments = ({ imageUrl }) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={styles.headerContainer}></View>
          <View>
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color="#aaa"
              style={styles.goBack}
              onPress={() => navigation.navigate("Profile")}
            />
          </View>
          <Text style={styles.headerText}>Коментарі</Text>
        </View>
        <Image source={require(imageUrl)} />
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
});

export default Comments;

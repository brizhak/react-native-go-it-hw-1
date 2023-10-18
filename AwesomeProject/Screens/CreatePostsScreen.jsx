import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
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
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync()();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.mainContainer}>
        <MapView
          style={styles.mapStyle}
          region={{
            ...location,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
          {location && (
            <Marker
              title="I am here"
              coordinate={location}
              description="Hello"
            />
          )}
        </MapView>
        <View>
          <View style={styles.photoContainer}>
            <Camera style={styles.camera} type={type} ref={setCameraRef}>
              <View style={styles.photoView}>
                <TouchableOpacity
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                  >
                    {/* {" "}
                    Flip{" "} */}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      await MediaLibrary.createAssetAsync(uri);
                    }
                  }}
                >
                  <View style={styles.takePhotoOut}>
                    <View style={styles.takePhotoInner}></View>
                  </View>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
          <Text style={styles.textDownload}>Завантажте фото</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              value={photoName}
              onChangeText={setPhotoName}
              required
            />
            <TextInput
              style={styles.input}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              required
            />
            <TouchableOpacity
              style={styles.buttonPublic}
              onPress={() => {
                if (!photoName) {
                  alert("Please entry all fields!");
                } else {
                  console.debug(photoName);
                  navigation.navigate("Posts");
                  setPhotoName("");
                }
              }}
            >
              <Text style={{ color: "#fff" }}>Опублікувати</Text>
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
    backgroundColor: "#FF6C00",
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
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default CreatePosts;

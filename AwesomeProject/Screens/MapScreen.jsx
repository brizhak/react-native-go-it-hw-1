import { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const location = route.params.location;
  //   useEffect(() => {
  //     (async () => {
  //       let { status } = await Location.requestBackgroundPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Permission to access location was denied");
  //       }

  //       let coord = await Location.getCurrentPositionAsync({});
  //       const coords = {
  //         latitude: coord.coords.latitude,
  //         longitude: coord.coords.longitude,
  //       };
  //       setLocation(coords);
  //     })();
  //   }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MapView
        style={{ width: "100%", height: "100%" }}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker title="I am here" coordinate={location} description="Hello" />
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

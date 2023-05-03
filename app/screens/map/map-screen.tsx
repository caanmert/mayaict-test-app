import { StyleSheet } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { useAppSelector } from "../../redux/hooks";
import { SafeAreaView } from "react-native-safe-area-context";

const MapScreen = () => {
  const { initialRegion } = useAppSelector((state) => state.user);
  const { markers } = useAppSelector((state) => state.map);

  const onMarkerPress = () => {
    console.log("Marker is pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView showsUserLocation initialRegion={initialRegion} style={styles.map}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            identifier={marker.id.toString()}
            coordinate={{
              latitude: parseFloat(marker.lat),
              longitude: parseFloat(marker.lng),
            }}
            onPress={onMarkerPress}
          />
        ))}
      </MapView>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

import { StyleSheet } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { useAppSelector } from "../../redux/hooks";

const MapScreen = () => {
  const { initialRegion } = useAppSelector((state) => state.user);
  const { markers } = useAppSelector((state) => state.map);

  const onMarkerPress = () => {
    console.log("Marker is pressed!");
  };

  return (
    <MapView zoomControlEnabled showsUserLocation style={styles.map} initialRegion={initialRegion}>
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
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

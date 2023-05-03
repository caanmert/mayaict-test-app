import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { useAppSelector } from "../../redux/hooks";
import { SearchBar } from "../../components";

const MapScreen = () => {
  const { initialRegion } = useAppSelector((state) => state.user);
  const { markers } = useAppSelector((state) => state.map);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const onMarkerPress = () => {
    console.log("Marker is pressed!");
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={(text: string) => handleSearch(text)} />
      <MapView
        //This is for location button to not to be displayed under search bar on Android.
        mapPadding={{ top: 90, left: 0, right: 0, bottom: 0 }}
        zoomControlEnabled
        showsUserLocation
        style={styles.map}
        initialRegion={initialRegion}
      >
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
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

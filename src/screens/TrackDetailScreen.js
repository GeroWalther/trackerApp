import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useState(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find((t) => t.id === _id);
  const initCoords = track.locations[0].coords;

  return (
    <>
      <Text>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

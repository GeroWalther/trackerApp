import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import React, { useContext, useCallback } from "react";
import Map from "../components/Map";
import { withNavigationFocus } from "react-navigation";
import { SafeAreaView } from "react-native";
import useLocation from "../hooks/useLocation";

// import "../mockLocation";
import { Context as LocationContext } from "../context/LocationContext";

import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err && <Text>Please enable location tracking</Text>}
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});

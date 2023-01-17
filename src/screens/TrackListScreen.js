import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationEvents } from "react-navigation";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});

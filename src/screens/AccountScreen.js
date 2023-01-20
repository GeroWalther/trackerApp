import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import React, { useContext } from "react";
import Spacer from "../components/Spacer";
import { Context } from "../context/AuthContext";
import { SafeAreaView } from "react-native";

const AccountScreen = () => {
  const { signout } = useContext(Context);
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 36 }}>AccountScreen</Text>
      <Spacer>
        <Button title={"Sign Out"} onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});

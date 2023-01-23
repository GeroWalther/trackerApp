import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import React, { useContext } from "react";
import Spacer from "../components/Spacer";
import { Context } from "../context/AuthContext";
import { SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} color="white" />,
};
export default AccountScreen;

const styles = StyleSheet.create({});

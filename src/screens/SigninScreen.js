import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import AuthFrom from "../components/AuthFrom";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrMsg } = useContext(Context);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrMsg} />
      <AuthFrom
        headerText="Sign In to Your Account"
        errorMsg={state.errorMessage}
        onSubmit={signin}
        subBtnTxt="Sign In"
      />
      <NavLink
        text="'Dont't have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

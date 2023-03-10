import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthCtx } from "../context/AuthContext";
import AuthFrom from "../components/AuthFrom";
import NavLink from "../components/NavLink";
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrMsg } = useContext(AuthCtx);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrMsg} />
      <AuthFrom
        headerText="Sign Up for Tracker"
        errorMsg={state.errorMessage}
        onSubmit={signup}
        subBtnTxt="Sign Up"
      />
      <NavLink
        routeName="Signin"
        text=" Already have an Account? Sign in instead"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;

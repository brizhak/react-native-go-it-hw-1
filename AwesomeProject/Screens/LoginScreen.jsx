import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BGImage from "../images/BGImage.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        source={BGImage}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={styles.innerContainer}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={true}
        >
          <View style={styles.container}>
            <View style={styles.loginContainer}>
              <Text style={styles.login}>Увійти</Text>
              <TextInput
                style={!emailFocus ? styles.input : styles.inputFocus}
                placeholder="Адреса електронної пошти"
                type="email"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <View style={styles.passContainer}>
                <TextInput
                  style={!passwordFocus ? styles.input : styles.inputFocus}
                  placeholder="Пароль"
                  secureTextEntry={!showPassword}
                  type="password"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <MaterialCommunityIcons
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#aaa"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => {
                  if (!email || !password) {
                    alert("Please entry all fields!");
                  } else {
                    console.debug(`Email: ${email}, password: ${password}`);
                    navigation.navigate("Home");
                    setEmail("");
                    setPassword("");
                  }
                }}
              >
                <Text style={{ color: "#ffffff" }}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textUnderButton}>
                  Немає акаунту?
                  <Text
                    style={styles.textRegister}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    {" "}
                    Зареєструватися
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <StatusBar style="auto" />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 489,
    backgroundColor: "#ffffff",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: 343,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 32,
  },
  passContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    left: -35,
    top: 12,
  },
  login: {
    fontSize: 30,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    textAlign: "center",
  },
  buttonLogin: {
    width: 343,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textUnderButton: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  inputFocus: {
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    width: 343,
    height: 50,
    borderColor: "#FF6C00",
    color: "#212121",
    backgroundColor: "#ffffff",
  },
  textRegister: {
    textDecorationLine: "underline",
  },
});

export default LoginScreen;

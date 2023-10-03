import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { Button } from "react-native-web";
import Icon from "react-native-vector-icons/FontAwesome";

export default function XMEye() {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Image
          source={require("./assets/eye.jpg")}
          style={{ width: "100px", height: "100px" }}
        />
        <View style={styles.viewForm}>
          <View style={styles.viewInput}>
            <Icon name="user" size={30} style={{ marginLeft: "10px" }} />
            <TextInput
              style={styles.input}
              placeholder="Please input user name"
            />
          </View>
          <View style={styles.viewInput}>
            <Icon name="lock" size={30} style={{ marginLeft: "10px" }} />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Please input password"
            />
          </View>
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.viewBtn}>
            <Text
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              LOGIN
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.viewForgotPassword}>
          <Text style={{ fontSize: "18px" }}>Register</Text>
          <Text style={{ fontSize: "18px" }}>Forgot Password</Text>
        </View>
        <View style={styles.viewForgotPassword}>
          <Text style={styles.line}></Text>
          <Text style={{ fontSize: "18px" }}>Other Login Methods</Text>
          <Text style={styles.line}></Text>
        </View>
        <View style={styles.viewSocial}>
          <View style={styles.viewImage}>
            <Image
              source={require("./assets/userplus.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.viewImage}>
            <Image source={require("./assets/wifi.jpg")} style={styles.image} />
          </View>
          <View style={styles.viewImage}>
            <Image source={require("./assets/fb.jpg")} style={styles.image} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "wwhite",
  },
  contents: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: "20px",
  },
  viewForm: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  viewInput: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    margin: "15px",
    borderBottomWidth: "1px",
    borderColor: "#C4C4C4",
  },
  input: {
    width: "100%",
    height: "100%",
    paddingLeft: "10px",
  },
  iconEye: {
    position: "absolute",
    top: "30%",
    right: "30px",
  },
  viewBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    backgroundColor: "#386FFC",
    borderRadius: "10px",
  },
  viewForgotPassword: {
    width: "100%",
    height: "80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    textAlignVertical: "center",
    width: "80px",
    borderWidth: "1px",
    borderColor: "#0E18F5",
  },
  viewSocial: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewImage: {
    width: "100px",
    height: "80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60px",
    height: "60px",
  },
});

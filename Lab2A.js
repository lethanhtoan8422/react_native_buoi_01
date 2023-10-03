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

export default function Lab2A() {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={{ fontSize: "30px", fontWeight: "bold" }}>LOGIN</Text>
        <View style={styles.viewForm}>
          <View style={styles.viewInput}>
            <Icon name="user" size={30} style={{ marginLeft: "10px" }} />
            <TextInput style={styles.input} placeholder="Name" />
          </View>
          <View style={styles.viewInput}>
            <Icon name="lock" size={30} style={{ marginLeft: "10px" }} />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
            />
            <Icon name="eye" size={20} style={styles.iconEye} />
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
          <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
            CREATE ACCOUNT
          </Text>
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
    backgroundImage:
      "linear-gradient(to bottom, #fbcb00, #ecbf00, #ddb200, #cea600, #bf9a00)",
  },
  contents: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
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
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    borderWidth: "1px",
    borderColor: "white",
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
    backgroundColor: "black",
  },
  viewForgotPassword: {
    width: "100%",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

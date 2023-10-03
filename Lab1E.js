import { RadioButton } from "react-native-paper";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: "30px", fontWeight: "bold" }}>REGISTER</Text>
      <View style={styles.viewForm}>
        <View style={styles.viewInput}>
          <TextInput style={styles.input} placeholder="Name" />
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.input} placeholder="Phone" />
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
          />
          <Icon name="eye" size={20} style={styles.iconEye} />
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.input} placeholder="Birthday" />
        </View>
        <View style={{width : '100%'}}>
          <View style={styles.viewRadios}>
            <View style={styles.viewRadio}>
              <RadioButton value="Male"/>
              <Text>Male</Text>
            </View>
            <View style={styles.viewRadio}>
              <RadioButton value="Female" />
              <Text>Female</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableWithoutFeedback>
        <View style={styles.viewBtn}>
          <Text
            style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
          >
            REGISTER
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.viewForgotPassword}>
        <Text>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: "20px",
    backgroundColor: "rgba(49, 170, 82, 0.19)",
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
    backgroundColor : 'rgba(196, 196, 196, 0.3)',
  },
  viewRadios : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'center',
  },
  viewRadio : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    margin : '10px'
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
    backgroundColor: "#E53935",
  },
  viewForgotPassword: {
    width: "100%",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
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
    height: "50px",
    borderWidth: "1px",
    borderColor: "#0680F1",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "40px",
    height: "40px",
  },
});

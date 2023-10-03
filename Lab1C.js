import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Lab1C() {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={{fontSize : '50px', fontWeight : 'bold', marginBottom : '20px'}}>CODE</Text>
        <Text style={styles.title}>VERIFICATION</Text>
        <Text style={styles.text}>Enter ontime password sent on ++849092605798</Text>
        <View style={styles.viewVerify}>
          <Text style={styles.numberVerify}></Text>
          <Text style={styles.numberVerify}></Text>
          <Text style={styles.numberVerify}></Text>
          <Text style={styles.numberVerify}></Text>
          <Text style={styles.numberVerify}></Text>
          <Text style={styles.numberVerify}></Text>
        </View>
        <View style={styles.viewBtn}>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <Text style={{fontSize : '20px', fontWeight : 'bold'}}>VERIFY CODE</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height : '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "linear-gradient(180deg, rgb(199,244,246) 28%,rgb(209,244,246) 57%,rgb(229,244,245) 89%,rgb(0,204,249) 95%)"
  },
  contents : {
    width : '100%',
    height : '70%',
    display : 'flex',
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal : '30px'
  },
  title : {
    textAlign : 'center',
    fontSize : '20px',
    fontWeight : 'bold'
  },
  text : {
    textAlign : 'center',
    fontSize : '15px',
    fontWeight : 'bold'
  },
  viewBtn : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  btn : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#E3C000',
    height : '50px',
  },
  viewVerify : {
    width : '100%',
    height : '50px',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
  },
  numberVerify : {
    borderWidth : '1px',
    borderColor : 'black',
    padding : '20px'
  }
});

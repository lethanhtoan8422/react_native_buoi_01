import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native-web';

export default function Lap1A() {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={styles.circle}></Text>
        <Text style={styles.title}>GROW <br/> YOUR BUSINESS</Text>
        <Text style={styles.text}>We will help you to grow your business using online server</Text>
        <View style={styles.viewBtn}>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <Text style={{fontSize : '20px', fontWeight : 'bold'}}>LOGIN</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <Text style={{fontSize : '20px', fontWeight : 'bold'}}>SIGN UP</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <Text style={styles.footer}>HOW WE WORK?</Text>
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
    // backgroundColor : '#00CCF9'
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
  circle : {
    padding : '40px',
    borderWidth  :'10px',
    borderColor : 'black',
    borderRadius : '50%',
  },
  title : {
    textAlign : 'center',
    fontSize : '30px',
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
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'yellow',
    width : '110px',
    height : '50px',
    borderRadius : '10px'
  },
  footer : {
    fontSize : '20px',
    fontWeight : 'bold',
    marginTop : '20px'
  }
});

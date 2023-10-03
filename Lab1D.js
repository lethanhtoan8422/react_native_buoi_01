import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Button } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Lab1D() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize : '30px', fontWeight  :'bold'}}>LOGIN</Text>
      <View style={styles.viewForm}>
        <View style={styles.viewInput}>
          <TextInput style={styles.input} placeholder='Email'/>
        </View>
        <View style={styles.viewInput}>
          <TextInput style={styles.input} secureTextEntry={true} placeholder='Password'/>
          <Icon name='eye' size={20} style={styles.iconEye}/>
        </View>
      </View>
      <TouchableWithoutFeedback>
        <View style={styles.viewBtn}>
          <Text style={{fontSize : '20px', fontWeight : 'bold', color : 'white'}}>LOGIN</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.viewForgotPassword}>
        <Text>When you agree to terms and conditions</Text>
        <Text style={{color : '#5D25FA'}}>For got your password?</Text>
        <Text>Or login with</Text>
      </View>
      <View style={styles.viewSocial}>
        <View style={{...styles.viewImage, backgroundColor : '#32518d'}}>
          <Image source={require("./assets/facebook.png")} style={styles.image}/>
        </View>
        <View style={{...styles.viewImage, backgroundColor : '#028fe3'}}>
          <Image source={require("./assets/zalo.png")} style={styles.image}/>
        </View>
        <View style={styles.viewImage}>
          <Image source={require("./assets/google.png")} style={styles.image}/>
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
    justifyContent: 'space-around',
    paddingHorizontal : '20px',
    backgroundColor : 'rgba(49, 170, 82, 0.19)'
  },
  viewForm : {
    width : '100%',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
  },
  viewInput : {
    position : 'relative',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    width : '100%',
    height : '50px',
    margin : '15px',
    backgroundColor : 'rgba(196, 196, 196, 0.3)',
  },
  input : {
    width : '100%',
    height : '100%',
    paddingLeft : '10px'
  },
  iconEye : {
    position :'absolute',
    top : '30%',
    right : '30px'
  },viewBtn : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    width : '100%', 
    height : '50px',
    backgroundColor : '#E53935'
  },
  viewForgotPassword : {
    width : '100%',
    height : '80px',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  viewSocial : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems  : 'center'
  },
  viewImage : {
    width : '100px',
    height : '50px',
    borderWidth : '1px',
    borderColor : '#0680F1',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },
  image : {
    width : '40px',
    height : '40px',
  }
  
});

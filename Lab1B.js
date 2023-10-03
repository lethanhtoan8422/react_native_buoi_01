import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Lab1B() {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Icon name='lock' size={150} />
        <Text style={styles.title}>FORGET <br/> PASSWORD</Text>
        <Text style={styles.text}>Provide your account’s email for which you want to reset your password</Text>
        <View style={styles.viewEmail}>
          <Icon name={'envelope'} size={20} style={{margin : '20px'}}/>
          <Text style={{marginRight : '20px'}}>Email</Text>
          <TextInput style={{height : '50%'}}/>
        </View>
        <View style={styles.viewBtn}>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <Text style={{fontSize : '20px', fontWeight : 'bold'}}>NEXT</Text>
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
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#E3C000',
    height : '50px',
    marginTop : '20px',
  },
  viewEmail : {
    width : '100%',
    height : '50px',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'center',
    backgroundColor : '#C4C4C4',
  }
});

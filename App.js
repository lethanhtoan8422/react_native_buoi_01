import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Image,
} from "react-native";
import { Button, CheckBox } from "react-native-web";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

export default function App() {
    const [password, setPassword] = useState("")
    const [lengthPassword, setLengthPassword] = useState(0)
    const [isLowerCase, setIsLowerCase] = useState(false)
    const [isUpCase, setIsUpCase] = useState(false)
    const [isNumber, setIsNumber] = useState(false)
    const [isSpecialSymbol, setIsSpecialSymbol] = useState(false)
    const [lowerCase, setLowerCase] = useState("abcdefghijklmnpqrstuvwxyz")
    const [upCase, setUpCase] = useState("ABCDEFGHIJKLMNPQRSTUVWXYZ")
    const [number, setNumber] = useState("0123456789")
    const [randomPass, setRandomPass] = useState([lowerCase, upCase, number])

    let handlePressGeneratePassword = () => {
        // console.log(`${password}-${lengthPassword}-${isLowerCase}-${isUpCase}-${isNumber}-${isSpecialSymbol}`);
        // console.log(Number(lengthPassword) ? true : false);
        // console.log(Math.floor(Math.random() * (24 - 0 + 1) + 0));
        // console.log("ABCDEFGHIJKLMNPQRSTUVWXYZ".toLowerCase());
        if(Number(lengthPassword)){
            let pass
            pass += number.charAt(Math.floor(Math.random() * numChars.length));
            pass += upCase.charAt(Math.floor(Math.random() * upCaseChars.length));
            pass += lowerCase.charAt(Math.floor(Math.random() * lowCaseChars.length));
            if(Number(lengthPassword) === 3){
                pass = Array(Number(lengthPassword))
                let indexL = Math.floor(Math.random() * (2 - 0 + 1) + 0)
                let indexU = Math.floor(Math.random() * (2 - 0 + 1) + 0)
                let indexN = Math.floor(Math.random() * (2 - 0 + 1) + 0)
                while(indexU === indexL){
                    indexU = Math.floor(Math.random() * (2 - 0 + 1) + 0)
                }
                while(indexN === indexU || indexN === indexL){
                    indexN = Math.floor(Math.random() * (2 - 0 + 1) + 0)
                }
                pass[indexN] = number.charAt(Math.floor(Math.random() * numChars.length));
                pass[indexU] = upCase.charAt(Math.floor(Math.random() * upCaseChars.length));
                pass[indexL] = lowerCase.charAt(Math.floor(Math.random() * lowCaseChars.length));
                setPassword(pass.join(""))

            }

        }
    }
    return ( 
        <View style = { styles.container } >
            <View style = { styles.contents } >
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>PASSWORD<br/>GENERATOR</Text>
                </View>
                <TextInput style={styles.input} defaultValue={password} onChangeText = {value => setPassword(value)}/>
                <View style={styles.viewForm}>
                    <Text style={styles.textForm}>Password length</Text>
                    <TextInput style={styles.inputLengthPass} keyboardType="numeric"
                    defaultValue={lengthPassword} onChangeText = {value => setLengthPassword(value)}
                    />
                </View>
                <View style={styles.viewForm}>
                    <Text style={styles.textForm}>Include lower case letters</Text>
                    <CheckBox style={styles.checkBox} value={isLowerCase}
                    onValueChange={setIsLowerCase}/>
                </View>
                <View style={styles.viewForm}>
                    <Text style={styles.textForm}>Include upcase letters</Text>
                    <CheckBox style={styles.checkBox} value={isUpCase}
                    onValueChange={setIsUpCase}/>
                </View>
                <View style={styles.viewForm}>
                    <Text style={styles.textForm}>Include number</Text>
                    <CheckBox style={styles.checkBox} value={isNumber}
                    onValueChange={setIsNumber}/>
                </View>
                <View style={styles.viewForm}>
                    <Text style={styles.textForm}>Include special symbol</Text>
                    <CheckBox style={styles.checkBox} value={isSpecialSymbol}
                    onValueChange={setIsSpecialSymbol}/>
                </View>
                <TouchableWithoutFeedback onPress={handlePressGeneratePassword}>
                    <View style={styles.viewBtn}>
                        <Text style={styles.textBtn}>GENERATE PASSWORD</Text>
                    </View>
                </TouchableWithoutFeedback>
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
        backgroundImage: "radial-gradient(circle, rgba(196,196,196,1) 0%, rgba(59,59,152,1) 100%)"
    },
    contents: {
        width: "90%",
        height: "93%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: "15px",
        backgroundColor: "rgba(35, 35, 91, 1)",
        borderRadius : '15px'
    },
    viewTitle : {
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontSize : '25px',
        fontWeight : 'bold',
        color : 'white',
    },
    input : {
        width : '100%',
        height : '60px',
        backgroundColor : '#151537'
    },
    viewForm : {
        width : '100%',
        display: 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    textForm : {
        fontSize : '20px',
        fontWeight : 'bold',
        color :'white'
    },
    inputLengthPass : {
        backgroundColor :'white',
        width : '118px',
        height : '33px'
    },
    checkBox : {
        width : '25px',
        height : '25px'
    },
    viewBtn : {
        width : '100%',
        height : '55px',
        backgroundColor : '#3B3B98',
        display : 'flex',
        flexDirection : 'row',
        justifyContent :'center',
        alignItems : 'center'
    },
    textBtn : {
        fontSize : '18px',
        fontWeight : 'bold',
        color : 'white'
    }
});
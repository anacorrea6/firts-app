import { useRef } from "react";
import { View , Text , StyleSheet , TextInput } from "react-native";

export default function TelaLogin(){
    const senhaRef = useRef(null);


    return(
        <View style={styles.container}>
            <Text style = {StyleSheet.titulo}>Login</Text>

            <TextInput 
            style= {StyleSheet.input} 
            placeholder= "Digite o seu email"
            keybordType= "email-adress"
            returnKeyType="numeric"
            onSubmitiEditing={() => senhaRef.current?.focus()}
            />


            <TextInput 
            style= {StyleSheet.input} 
            placeholder= "Digite a sua senha"
            secureTextEntry={true}
            returnKeyType="send"
            ref={senhaRef}
            />
        </View>
    )
}


const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
justifyContent: "center",
},
titulo: {
fontSize: 24,
fontWeight: "bold",
marginBottom: 20,
textAlign: "center",
},
input: {
borderWidth: 1,
borderColor: "#ccc",
borderRadius: 8,
padding: 15,
marginBottom: 15,
fontSize: 16,
},
});
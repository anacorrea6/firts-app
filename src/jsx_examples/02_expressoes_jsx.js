import { StyleSheet, Text, View } from "react-native";

export function ExpressoesJSX(){
    const nome = "Maria";
    const idade = 25;
    const preco = 49.9;

    const usuario = {
        nome: "Ana",
        cidade: "Salto",
    };


    return(
        <View style={styles.container} >
            <Text style= {styles.titulo} > expressoes JSx - Exemplos</Text>
            <View>
                <View>
                    <Text> Nome: {nome}</Text>
                    <Text> Idade: {idade}</Text>
                </View>
            </View>


            <View>
                <Text> Maiuscula: {nome.toUpperCase()}</Text>
                <Text> Soma: {preco * 2}</Text>
            </View>

{/* Chamar o usuario */}
             <View>
                <Text>{usuario.nome}</Text>
                <Text>{usuario.cidade}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#7ea08e",
    },
    titulo: {
        fontSize:20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    exemplo: {
        width: "80%",
        padding:16,
        marginBottom:16,
        backgroundColor:"#fff",
        borderRadius: 8,
    }
});
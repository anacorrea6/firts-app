import { Text, View } from "react-native";

export function EstruturaJSX(){
    return(
        <View>
            <Text>Exemplo de retorno único</Text>

        {/* Retorno único com Fragment <> </>*/}
            <View>
                <>

                <Text></Text>
                <view/>     
                </>
            </View>

        </View>

    )
}
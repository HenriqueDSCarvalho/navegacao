import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    function navegaDetalhes() {
        navigation.navigate('Detalhes');
    }
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                ola mundo
            </Text>

            <Button title="ir para detalhes" onPress={navegaDetalhes}/>
            <Button title="ir para drawer" onPress={() => navigation.openDrawer()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000'
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000'
    },
});

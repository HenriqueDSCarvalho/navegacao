import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Home() {

 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                pagina sobre
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
  
        
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000',
        justifyContent: 'flex-start',
        textAlign: 'center'
    },
    textoSobre: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'justify',
        padding: 10
    },
});

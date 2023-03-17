import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function Header(){
    return(
        <View>
            <LinearGradient style={{
                height: 100,
            }} colors={['#D3D3D3','#00BFFF']}>
                <View style={styles.header}>
                    <Text style={styles.nome}>ACME</Text>
                    <Text style={styles.texto}>Climatempo</Text>
                </View>
            </LinearGradient> 
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        height: 100,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 80,
        paddingRight: 80,
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    nome: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 50
    },
    texto:{
        fontSize: 20,
        color: '#fff',
        marginTop: 50
    }
});

export default Header;
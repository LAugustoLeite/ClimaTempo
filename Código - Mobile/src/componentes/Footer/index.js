import { View, Text, StyleSheet } from "react-native";

function Footer(){
    return(
            <View style={styles.container}>
                <Text style={styles.copy}>Copyright &copy; 2022 SENAI-ACME</Text>
            </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#9370db'
    },
    copy: {
        color: '#fff',
        fontSize: 10,
        height: 20,
        paddingTop: 2
    }
})
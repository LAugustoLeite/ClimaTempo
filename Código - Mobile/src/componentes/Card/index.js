import { useEffect, useState } from "react";
import api from "../../service/api.js";
import { View, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function Card(props){
    const [temp, setTemp] = useState();
    const [tempmax, setTempmax] = useState();
    const [tempmin, setTempmin] = useState();
    const [sensacao, setSensacao] = useState();
    const [icon, setIcon] = useState();
    const [uv, setUv] = useState();
    const [umidade, setUmidade] = useState();

    useEffect(() => {
        async function carregaCard(){
            const resposta = await api.get(`forecast.json?key=d7b7cdaaaf10476592a224442221009&q=${props.cidade}&days=1&aqi=no&alerts=no`);

            const dados = resposta.data;

            setTemp(dados.current.temp_c);
            setTempmax(dados.forecast.forecastday[0].day.maxtemp_c);
            setTempmin(dados.forecast.forecastday[0].day.mintemp_c);
            setSensacao(dados.current.feelslike_c);
            setIcon(dados.current.condition.icon);
            setUv(dados.current.uv);
            setUmidade(dados.current.humidity);
        }
        carregaCard();
    }, []);

    return(
        <View>
            <LinearGradient style={{
                padding: 10,
                margin: 20,
                marginLeft: 30,
                marginRight: 30,
                height: 240,
                borderRadius: 20
            }} colors={['#1E90FF','#87CEFA']}>
                <View style={styles.card}>
                        <Text style={styles.nome}>{props.cidade}</Text>
                    <View style={styles.container1}>
                        <Image style={styles.img} source={{uri: `http:${icon}`}}/>
                        <Text style={styles.temp}>{temp}º</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.min}>Mín: {tempmin}º</Text>
                        <Text style={styles.max}>Máx: {tempmax}º</Text>
                    </View>    
                    <View style={styles.container3}>
                        <Text style={styles.sen}>Sensação térmica: </Text><Text style={{fontWeight:'bold'}}>{sensacao}º</Text>
                        <Text style={styles.umi}>Umidade: {umidade}</Text>
                        <Text style={styles.uv}>Índice UV: {uv}</Text>
                    </View>   
                </View>
            </LinearGradient>
        </View>
    ) 

}

export default Card;

const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        marginBottom: 20, 
    },
    nome:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    container1:{
        display: 'flex',
        flexDirection: 'row', 
    },
    img:{
        width: 60,
		height: 70,
        marginRight: 10,
    },
    temp:{
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    },
    container2:{
        width: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    min:{
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
    },
    max:{
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
    },
    container3: {
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sen:{
        fontWeight:'bold'
    },
    umi:{
        fontWeight:'bold'
    },
    uv:{
        fontWeight:'bold'
    }    
})
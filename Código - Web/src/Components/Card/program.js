import { useState, useEffect} from "react";
import api from "../../services/api";
import Card from "../Card/index";
import './style.css';

export default function Card2() {
	const [cidadesp, setcidadesp] = useState("");
	const [cidadecwb, setcidadecwb] = useState("");
	const [cidadenatal, setcidadenatal] = useState("");

	useEffect(() => {

    async function BuscaSP(){
        const resposta = await api.get(
            "https://api.weatherapi.com/v1/forecast.json?key=d893fb7b72464d7688d124905220209&q=sao%20paulo&days=1&aqi=no&alerts=no"
        );
        const buscaSP = resposta.data;
        setcidadesp(
            <Card
                img={buscaSP.current.condition.icon}
                temp={buscaSP.current.temp_c}
                cidade={buscaSP.location.name}
                temp_max={buscaSP.forecast.forecastday[0].day.mintemp_c}
                temp_min={buscaSP.forecast.forecastday[0].day.maxtemp_c}
                umidade={buscaSP.current.humidity}
                uv={buscaSP.current.uv}
                sensacao={buscaSP.current.feelslike_c}
            />
		);
    }
    async function BuscaCWB(){
        const resposta = await api.get(
            "https://api.weatherapi.com/v1/forecast.json?key=d893fb7b72464d7688d124905220209&q=curitiba&days=1&aqi=no&alerts=no"
        );
        const buscaCWB = resposta.data;
        setcidadecwb(
            <Card
                img={buscaCWB.current.condition.icon}
                temp={buscaCWB.current.temp_c}
                cidade={buscaCWB.location.name}
                temp_max={buscaCWB.forecast.forecastday[0].day.mintemp_c}
                temp_min={buscaCWB.forecast.forecastday[0].day.maxtemp_c}
                umidade={buscaCWB.current.humidity}
                uv={buscaCWB.current.uv}
                sensacao={buscaCWB.current.feelslike_c}
            />
		);
    }
    async function BuscaNATAL(){
        const resposta = await api.get(
            "https://api.weatherapi.com/v1/forecast.json?key=d893fb7b72464d7688d124905220209&q=natal&days=1&aqi=no&alerts=no"
        );
        const buscaNATAL = resposta.data;
        setcidadenatal(
            <Card
                img={buscaNATAL.current.condition.icon}
                temp={buscaNATAL.current.temp_c}
                temp_max={buscaNATAL.forecast.forecastday[0].day.mintemp_c}
                temp_min={buscaNATAL.forecast.forecastday[0].day.maxtemp_c}
                umidade={buscaNATAL.current.humidity}
                uv={buscaNATAL.current.uv}
                sensacao={buscaNATAL.current.feelslike_c}
                cidade={buscaNATAL.location.name}
            />
        
		);
    }
    BuscaSP();
    BuscaCWB();
    BuscaNATAL();
  
    }, []);
  
    return(
        <>
        {cidadesp}
        {cidadecwb}
        {cidadenatal}
        </>
    );
}
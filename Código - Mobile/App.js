import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';

import Footer  from './src/componentes/Footer';
import Card  from './src/componentes/Card';
import Header from './src/componentes/Header';

export default function App() {
  return (
    <SafeAreaView>
        <ScrollView>  
          <Header/>
          <Card cidade={"São Paulo"}/>
          <Card cidade={"Natal"}/>
          <Card cidade={"Curitiba"}/>
          <Footer/>
        </ScrollView> 
    </SafeAreaView>
  );
}

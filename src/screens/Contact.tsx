import React from 'react';
import { View , Text, StyleSheet, ScrollView, Dimensions, Image, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';
import logoAccenture from '../images/Accenture.png'
import { RectButton } from 'react-native-gesture-handler';

export default function Contact() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* <LottieView 
            source={require('../animations/gradientBall.json')}
            style={styles.animationContent}
            resizeMode='contain'
            autoPlay
            loop
        /> */}
        <Text>Contact</Text>

        <Image
          style={styles.topImage}
          source={{ uri: 'https://startupi.com.br/wp-content/uploads/2020/01/accenture-1.jpg'}}
        />
        <Image 
          style={styles.logoAccenture}
          source={logoAccenture}
        />
        <Text>
          Formulário de contato
        </Text>
        <View>
          <Text style={styles.labelForm}>Seu nome: </Text>
          <TextInput 
            style={styles.inputForm}
          />
          <Text style={styles.labelForm}>Seu telefone: </Text>
          <TextInput 
            style={styles.inputForm}
          />
          <Text style={styles.labelForm}>Seu email: </Text>
          <TextInput 
            style={styles.inputForm}
          />
          <Text style={styles.labelForm}>Deixe sua mensagem: </Text>
          <TextInput 
            style={styles.inputForm}
            multiline
          />
          <RectButton>
            <Text>Enviar mensagem</Text>
          </RectButton>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topImage: {
    width: Dimensions.get('window').width,
    height: 300
  },
  logoAccenture: {
    marginVertical: 6,
    width: 200,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {
     width: Dimensions.get('window').width
  },
  animationContent: {
    height: 400,
    width: 400
  },
  labelForm: {

  },
  inputForm: {

  }
})

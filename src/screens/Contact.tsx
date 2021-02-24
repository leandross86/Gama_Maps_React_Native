import React, { useState } from 'react';
import { View , Text, StyleSheet, ScrollView, Dimensions, Image, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';
import { Feather } from '@expo/vector-icons'
import logoAccenture from '../images/Accenture.png'
import { RectButton } from 'react-native-gesture-handler';

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')
  const [isSendMessage, setIsSendMessage] = useState(false)

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        { isSendMessage ? (
          <>
            <Text style={styles.sendText}>Sua mensagem</Text>
            <Text style={styles.sendText}>Foi enviada!</Text>
            <LottieView 
              source={require('../animations/gradientBall.json')}
              style={styles.animationContent}
              resizeMode='contain'
              autoPlay
              loop
            />
          </> 
        ) : (
          <>
            <Image 
              style={styles.logoAccenture}
              source={logoAccenture}
            />
            <Text style={styles.title}>
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
                style={styles.inputFormMultiline}
                multiline
              />
              <RectButton style={styles.sendButton}>
                <Text style={styles.textSendButton}>Enviar mensagem</Text>
                <Feather name='send' size={20} color='#a100ff'/>
              </RectButton>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height
  },
  logoAccenture: {
    marginTop: 10,
    width: 200,
    height: 52,
  },
  title: {
    fontSize: 20,
    marginVertical: 30,
    color: '#a100ff'
  },
  scrollView: {
     width: Dimensions.get('window').width
  },
  sendText: {
    color: '#a100ff',
    fontSize: 24,

  },
  animationContent: {
    height: 450,
    width: 450
  },
  labelForm: {
    marginTop: 22
  },
  inputForm: {
    height: 50,
    width: 350,
    borderColor: '#b9b7b7',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 5,
    paddingHorizontal: 20
  },
  inputFormMultiline: {
    height: 120,
    width: 350,
    borderColor: '#b9b7b7',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    marginTop: 20
  },
  textSendButton: {
    color: '#a100ff',
    fontSize: 20,
    marginLeft: 6
  } 
})

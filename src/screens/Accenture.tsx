import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, Dimensions, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import AccentureLogo from "../images/Accenture.png";
import { getData } from '../service'

import { GetUnit, IAllUnits} from '../interfaces'

export default function Accenture() {

  const navigation = useNavigation()

  const route = useRoute()
  const params = route.params as GetUnit

  const [unit, setUnit] = useState<IAllUnits>()

  useEffect(() => {
    getData.get(`find?id=${params.id}`).then(
      response => {
        setUnit(response.data)
      }
    )
  }, [params.id])


  function handlePushContact() {
    navigation.navigate('Contact')
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
            style={styles.topImage}
            source={{ uri: unit?.profile}}
          />
        <Image
          style={styles.logo}
          source={AccentureLogo}
          height={60}
          width={231}
        />
        <Text style={styles.title}>{unit?.name}</Text>
        <Text style={styles.paragraph}>{unit?.describle}</Text>
        <Text style={styles.details}>País: {unit?.country}</Text>
        <Text style={styles.details}>Estado: {unit?.state}</Text>
        <Text style={styles.details}>Cidade: {unit?.city}</Text>
        <Text style={styles.details}>Endereço: {unit?.address.street}, nº {unit?.address.number}</Text>

        <RectButton onPress={handlePushContact} style={styles.contactButton}>
          <Text style={styles.textButton}>Entrar em contato</Text>
          <Feather name="send" size={20}  color="#a100ff"/>
        </RectButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get('window').width
 },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: Dimensions.get('window').height
  },
  topImage: {
    width: Dimensions.get('window').width,
    height: 300
  },
  logo: {
    marginVertical: 40,
    height: 80,
    width: 300
    ,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "#8f8f8f",
  },
  paragraph: {
    margin: 28,
    fontSize: 18,
    textAlign: "center",
    color: "#B8B8B8",
    marginBottom: 15
  },
  contactButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textButton: {
    justifyContent: "center",
    alignItems: "center",
    color: "#A100FF",
    margin: 10,
  },
  details: {
    marginVertical: 6,
    color: '#9f9f9f'
  }
});
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Detalhes = ({route}) => {
  const evento  = route.params.paramKey

  // console.log(evento.titulo)
  console.log(route.params.paramKey)
  return (
    <View>
      <Text>Detalhes</Text>
    </View>
  )
}

export default Detalhes

const styles = StyleSheet.create({})
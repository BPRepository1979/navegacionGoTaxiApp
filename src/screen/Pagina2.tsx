import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


const Pagina2 = () => {

const navigator=useNavigation();

useEffect(() => {
  navigator.setOptions({
    title: 'Hola Mundo',
    headerBackTitle: 'Atras'
})
}, [])



  return (
  <View style={styles.globalMargin}>
<Text style={styles.title}>
    pagina 2
</Text>

<Button
title='ir pagina 3'
onPress={()=> navigator.navigate('Pagina3' as never)}


/>

  </View>
  )
}

export default Pagina2



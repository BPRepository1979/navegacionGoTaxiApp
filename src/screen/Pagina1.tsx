import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any> {


}

const Pagina1 = ({navigation}: Props) => {
  return (
    <View style={ styles.globalMargin }>
    <Text style={styles.title }>Pagina1Screen </Text>

    <Button 
        title="Ir página 2"
        onPress={ () => navigation.navigate('Pagina2') }
    />

    <Text style={{ 
        marginVertical: 20,
        fontSize: 20,
     }}> 
    </Text>


    <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity


            style={{ 
                ...styles.botonGrande,
                backgroundColor: '#5856D6'
            }}
            onPress={ () => navigation.navigate('Personascreen', {
                id: 1,
                nombre: 'Pedro'


            }) }

            
        >
                
          
            <Text style={ styles.botonGrandeTexto }>Pedro</Text>
        </TouchableOpacity>


        <TouchableOpacity
            style={{ 
                ...styles.botonGrande,
                backgroundColor: '#FF9427'
            }}
            onPress={ () => navigation.navigate('Personascreen', {
                id: 2,
                nombre: 'Maria'
            }) }
        >
            <Text style={ styles.botonGrandeTexto }>Maria</Text>
        </TouchableOpacity>

    </View>




</View>
  )
}

export default Pagina1

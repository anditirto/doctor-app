import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Hospital1} from '../../../assets'
import { Fonts,Colors} from '../../../utils'

const ListHospital = () => {
    return (
        <View style={styles.container}>
        <Image source={Hospital1} style={styles.image} />
        <View>
            <Text style={styles.title}>ListHospital</Text>
            <Text style={styles.title}>ListHospital</Text>
            <Text style={styles.address}>ListHospital</Text>
        </View>
        </View>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth:1,
        borderBottomColor: Colors.border,
    },
    image:{
        width:80,
        height:60,
        borderRadius:11,
        marginRight:16,
    },
    title:{
        fontSize:16,
        fontFamily: Fonts.primary[600],
        color:Colors.text.primary,
    },
    address:{
        fontSize:12,
        fontFamily: Fonts.primary[300],
        color:Colors.text.secondary,
        marginTop:6,
    }
})

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { DokterUmum, Psikiater, Obat} from '../../../assets'
import { Colors,Fonts} from '../../../utils'

const DoctorCategory = ({category,onPress}) => {
    const Icon = () => {
            if(category === 'DokterUmum'){
                return <DokterUmum style={styles.illustration} />
            }
            if(category === 'Psikiater'){
                return <Psikiater style={styles.illustration} />
            }
            if(category === 'Obat'){
                return <Obat style={styles.illustration} />
            }
            return <DokterUmum style={styles.illustration} />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon />
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container:{
        padding:12,
        backgroundColor:Colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius:10,
        marginRight:10,
        width:100,
        height:130,
    },
    illustration:{
        marginBottom:28,
    },
    label:{
        fontSize:12,
        fontFamily:Fonts.primary[300],
        color:Colors.text.primary,
    },
    category:{
        fontSize:12,
        fontFamily:Fonts.primary[600],
        color:Colors.text.primary,
    },
});

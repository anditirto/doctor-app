import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {news1,news2,news3} from '../../../assets'
import { Fonts, Colors} from '../../../utils'

const GoodNews = ({key, title, content, date, image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date} </Text>
            </View>
            <Image source={{uri : image}} style={styles.image} />
        </View>
    )
}

export default GoodNews

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderBottomWidth:1,
        borderColor:Colors.border,
        paddingBottom:12,
        paddingTop:16,
        paddingHorizontal: 16,
    },
    titleWrapper:{
        flex:1,
    },
    title:{
        fontSize:16,
        fontFamily:Fonts.primary[600],
        color:Colors.text.primary,
        maxWidth:'90%',
    },
    date:{
        fontSize:12,
        fontFamily:Fonts.primary.normal,
        color:Colors.text.secondary,
    },
    image:{
        width:80,
        height:60,
        borderRadius:11,
    }
})

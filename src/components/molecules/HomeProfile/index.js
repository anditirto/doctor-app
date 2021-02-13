import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { user,ILUserPhotoUserNull } from '../../../assets'
import {Colors,Fonts,getData} from '../../../utils'

const HomeProfile = ({onPress}) => {
    const [profile,setProfile] = useState({
        photo : ILUserPhotoUserNull,
        fullName: '',
        profession : '',
    });

    useEffect(() => {
        getData('user').then(res => {
            //console.log('Hasil Response Res : ',res)
            const data = res;
            data.photo = {uri:res.photo}
            console.log('Hasil Response data : ',data)
            setProfile(data)
        })
    }, []);
    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar} />
            <View>
            <Text style={styles.name}>{profile.fullName}</Text>
            <Text style={styles.profession}>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    avatar:{
        width:46,
        height:46,
        borderRadius:46/2,
        marginRight:12,
    },
    name:{
        fontSize:16,
        fontFamily:Fonts.primary[600],
        color:Colors.text.primary,
        textTransform:'capitalize',
    },
    profession:{
        fontSize:12,
        fontFamily:Fonts.primary[400],
        color:Colors.text.secondary,
        textTransform:'capitalize',
    }
})

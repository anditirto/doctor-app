import React,{useState,useEffect} from 'react'
import {StyleSheet, Text, View } from 'react-native'
import {Header,Profile,List, Gap} from '../../components'
import {getData} from '../../utils'
import {ILUserPhotoUserNull} from '../../assets'
import {Fire} from '../../config'
import ImagePicker from 'react-native-image-picker';

const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName:'',
        profession:'',
        photo:ILUserPhotoUserNull,
    })

    useEffect(() => {
        getData('user').then((res) => {
            const data = res;
            data.photo = {uri : res.photo}
             setProfile(data);
        })
    }, []);

    const signOut = () => {
        Fire.auth().signOut().then(() => {
            console.log("Sukses Sign Out")
            navigation.replace('GetStarted')
        }).catch(err => {
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: Colors.error,
                color: Colors.white,
                });
        })
    }

    return (
        <View style={styles.page}>
        <Header title="Profile" onPress={() => navigation.goBack()} />
        <Gap height={10} />
        {profile.fullName.length > 0 && (
            <Profile photo={profile.photo} name={profile.fullName} desc={profile.profession} />
        )}
        <Gap height={14} />
        <View>
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="editProfile" onPress={ () => navigation.navigate('UpdateProfile')} />
            <List name="Language" desc="Last Update Yesterday" type="next" icon="language" />
            <List name="Give Us Rate" desc="Last Update Yesterday" type="next" icon="rate" />
            <List name="Sign Out" desc="Last Update Yesterday" type="next" icon="help" onPress={signOut} />
        </View>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white',
    }
})

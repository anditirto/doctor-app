import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {Fonts, Colors, getData, useForm} from '../../utils';
import {Fire} from '../../config';
import ImagePicker from 'react-native-image-picker';
import {
  ILUserPhotoUserNull,
  ICBtnAddPhoto,
  ICBtnRemovePhoto,
} from '../../assets';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILUserPhotoUserNull);
  const [photoForDB, setPhotoForDb] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const update = () => {
    if(password.length > 0){
        if(password.length < 6){
            showMessage({
                    message: 'Password kuranf dari 6',
                    type:'default',
                    bacgkgroundColor: Colors.error,
                    color: 'white',
                });
        }else{
            updatePassword();
            updateProfileData();
            navigation.navigate('MainApp')
        }
    }else{
        updateProfileData();
        navigation.navigate('MainApp')
    }
  };

    const updatePassword = () => {
                    // Update Password
            Fire.auth().onAuthStateChanged(user => {
                if(user){
                    user.updatePassword(password).catch(err => {
                        showMessage({
                            message: 'Password kuranf dari 6',
                            type:'default',
                            bacgkgroundColor: Colors.error,
                            color: 'white',
                        });
                    });
                }else{
                    Fire.database()
                    .ref(`users/${profile.uid}/`)
                    .update(data)
                    .then(() => {
                            console.log('success : ', data);
                            storeData('user', data);
                        })
                    .catch((err) => {
                            showMessage({
                            message: err.message,
                            type: 'default',
                            backgroundColor: Colors.error,
                            color: Colors.white,
                        });
                    });
                }
             });
    }

    const updateProfileData = () => {
        const data = profile;
        data.photo = photoForDB;
        Fire.database()
            .ref(`users/${profile.uid}/`)
            .update(data)
            .then(() => {
                console.log('success : ', data);
                storeData('user', data);
            })
            .catch((err) => {
                showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: Colors.error,
                color: Colors.white,
                });
        });
    }

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
    };
    //Open Image Library:
    ImagePicker.launchImageLibrary(options, (response) => {
      // Same code as in above section!
      console.log(response);
      if (response.didCancel || response.error) {
        showMessage({
          message: 'User cancelled image picker',
          type: 'info',
          backgroundColor: Colors.error,
        });
      } else {
        const source = {uri: response.uri};

        setPhotoForDb(`data:${response.type};base64, ${response.data}`);
        setPhoto(source);
      }
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicatior={false}>
        <View style={styles.content}>
          <Profile isRemove photo={photo} onPress={getImage} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={26} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={(value) => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input
            label="Password"
            secureTextEntry
            value={profile.password}
            onChangeText={(value) => changeText('password', value)}
          />
          <Gap height={24} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});

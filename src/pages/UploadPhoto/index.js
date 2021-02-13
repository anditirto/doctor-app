import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {
  ILUserPhotoUserNull,
  ICBtnAddPhoto,
  ICBtnRemovePhoto,
} from '../../assets';
import {Colors, Fonts} from '../../utils';
import ImagePicker from 'react-native-image-picker';
//import ImagePicker from 'react-native-image-crop-picker';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {Fire} from '../../config';
import {storeData} from '../../utils';

export default function UploadPhoto({navigation, route}) {
  const {fullName, profession, email, uid} = route.params;
  const [photoForDb, setPhotoForDb] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILUserPhotoUserNull);

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
        setHasPhoto(true);
      }
    });
  };

  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDb});

    const data = route.params;
    data.photo = photoForDb;
    console.log('Store data UploadPhoto : ', data)
    storeData('user', data);

    navigation.replace('MainApp')
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.AvatarWrapper} onPress={getImage}>
            <Image style={styles.Avatar} source={photo} alt="uploadPhotoNull" />
            {!hasPhoto && <ICBtnAddPhoto style={styles.addPhoto} />}
            {hasPhoto && <ICBtnRemovePhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Gap />
          <Text style={styles.profession}>{profession}</Text>
          <Gap />
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload And Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip For This"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  Avatar: {
    width: 110,
    height: 110,
    borderRadius: 100 / 2,
  },
  AvatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: Colors.text.primary,
    fontFamily: Fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: Colors.text.primary,
    fontFamily: Fonts.primary.normal,
    textAlign: 'center',
    color: Colors.text.secondary,
  },
});

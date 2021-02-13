import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key,value) => {
  console.log('Local Storage Value : ', value)
  const JsonValue = JSON.stringify(value)
    try {
      await AsyncStorage.setItem(key, JsonValue);
    } catch (e) {
      // saving error
    }
  };

export const getData = async (key,value) => {
  //console.log('masuk GetData Key :', key);
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        //console.log('Get Data success :',value);
        return JSON.parse(value);
      }
    } catch (e) {
      // error reading value
      console.log('Get Data Error :', e)
    }
  };
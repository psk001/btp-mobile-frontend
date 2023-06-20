import AsyncStorage from '@react-native-async-storage/async-storage';

const saveDataToLocalStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data saved successfully');
    } catch (error) {
      console.log('Error saving data: ', error);
    }
};


const getDataFromLocalStorage = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Data retrieved successfully');
        return value;
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.log('Error retrieving data: ', error);
    }
};


module.exports= {
    saveDataToLocalStorage,
    getDataFromLocalStorage
}
  



import { Link } from "expo-router";
import React, { useState, useEffect } from 'react';
import { View, Button, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import {getDataFromLocalStorage} from '../assets/helpers/localStorage';
import styles from '../assets/styles';
import LinkButton from '../assets/component/LinkButton';


export default function Add() {
  const [cameraPermission, setCameraPermission] = useState(null);
  
  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const navigation = useNavigation();

  const uploadImage = async () => {
    try{
      const mobile= await getDataFromLocalStorage('mobile')
      const formData = new FormData();
      formData.append('image', {
          uri: imageUri,
          type: 'image/jpeg',
          name: `user-${mobile}.jpg`,
      });
      formData.append('title', `user-${mobile}`);

      const response = await axios.post('https://pskpr.pythonanywhere.com/user/images', formData);
      // console.log(response.data);
    
      // const data = await response.json();
      // console.log(data);

      //  Navigate to final confirmation page
      navigation.navigate('confirmation');

    }catch(err){
      console.log(err)
    }
  };

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === 'granted');

    if (
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  useEffect(() => {
    permisionFunction();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImageUri(data.uri);
    }
  };


  return (
    <ImageBackground source={require("/home/psk/Desktop/btp-rn-frontend/off-vote/assets/t1.png")} style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        />
      </View>

        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
           <Text  style={styles.LinkButton} >Flip Camera</Text>
        </TouchableOpacity>

      <Button  style={styles.LinkButton} title={'Take Picture'} onPress={takePicture} />
      {/* {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />} */}

      <LinkButton style={styles.LinkButton} onPress={uploadImage} text="Submit" /> 

    </ImageBackground>
  );
}

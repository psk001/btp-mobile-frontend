import { View, Text, TextInput, ImageBackground } from 'react-native';
import styles from '../assets/styles'

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinkButton from '../assets/component/LinkButton';
import {getDataFromLocalStorage} from '../assets/helpers/localStorage';

export default function Login(){

  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigation = useNavigation();

  const handleInputChange = (value) => {
    setInputValue(value);
    setIsButtonDisabled(value.trim().length === 0);
  }


  const handlePress = async() => {
    const mobile= await getDataFromLocalStorage('mobile')
    console.log('mobile: ', mobile)
    let verified= await fetch('https://pskpr.pythonanywhere.com/user/verify', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      mobile: mobile,
                      otp: inputValue
                    })
                  })

    console.log('verified data: ', verified)                  
    verified= await verified.json();                  
    console.log('verified data: ', verified)
    // Navigate to a new page
    navigation.navigate('election-list');
}

    return (
        <ImageBackground source={require("/home/psk/Desktop/btp-rn-frontend/off-vote/assets/f-app-bg1.jpg")} style={styles.container} >
         
          <View style={styles.innerContainer}>
            <Text style={styles.header}> Enter OTP </Text>
            <TextInput
              placeholder={'OTP'}
              name={'mobile'}
              style={styles.input}
              value={inputValue}
              onChangeText={handleInputChange}
            />
    
            <LinkButton 
              style={styles.LinkButton}
              onPress={handlePress} 
              disabled={isButtonDisabled}
              text="Verify OTP" 
            />
          </View>
    
        </ImageBackground>
      );
}
  
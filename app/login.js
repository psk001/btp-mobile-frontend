import { View, Text, TextInput , ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import LinkButton from '../assets/component/LinkButton';
import styles from '../assets/styles'
import {saveDataToLocalStorage} from '../assets/helpers/localStorage';

export default function Login(){

  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigation = useNavigation();

  const handleInputChange = (value) => {
    setInputValue(value);
    setIsButtonDisabled(value.trim().length === 0);
  }

  const handlePress = async() => {
    console.log('login button pressed, mobile: ', inputValue)
    saveDataToLocalStorage('mobile', inputValue)
    let otp= await fetch('https://pskpr.pythonanywhere.com/user/api', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      mobile: inputValue
                    })
                  })

    otp= await otp.json()
    console.log(otp)
    // Navigate to a new page
    navigation.navigate('verify-otp');
};

    return (
        <ImageBackground source={require("/home/psk/Desktop/btp-rn-frontend/off-vote/assets/t1.png")} style={styles.container}>
         
          <View style={styles.innerContainer}>
            <Text style={styles.header}> Login to you account </Text>
            <TextInput
              placeholder={'Mobile Number'}
              name={'mobile'}
              style={styles.input}
              value={inputValue}
              onChangeText={handleInputChange}
            />
            <LinkButton 
              style={styles.LinkButton}
              onPress={handlePress} 
              disabled={isButtonDisabled}
              text="Get OTP" 
            />
          </View>
    
        </ImageBackground>
      );
}
  
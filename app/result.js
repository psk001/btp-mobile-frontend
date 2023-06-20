import { Link } from "expo-router";
import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
// import { NetworkInfo } from 'react-native-network-info'
import styles from '../assets/styles';


export default function VoteConfirmationScreen(){

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    console.log(generateString(5));

    // Network.getMacAddressAsync()
    //     .then(macAddress => {
    //          console.log(macAddress)
    //      })
    //      .catch(error => console.log(error))
         

    // NetworkInfo.getBSSID(bssid => {
    //     console.log(bssid);
    //   });


    return (
        <ImageBackground source={require("/home/psk/Desktop/btp-rn-frontend/off-vote/assets/t1.png")} style={styles.container}>
            {/* <Text style={styles.header}> Mark Frank</Text> */}
            <View style={styles.innerContainer}>
                <Image source = {require('../assets/images/final-voted.png')}  />
                <Text>Secure Voting Id: {generateString(12)}</Text>

                <Link href= "/login">
                    <Text style={styles.taskItem}>Home</Text>
                </Link>  
            </View>

        </ImageBackground>
    )
}

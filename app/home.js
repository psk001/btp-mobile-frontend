import { Text, View } from "react-native";
import styles from '../assets/styles'

export default function Home() {
  return (
    <View style= {styles.container}>
        <Text> Welcome to Sudo Secure</Text>
        <Text> We care about your privacy !!</Text>        
    </View>
  );
}
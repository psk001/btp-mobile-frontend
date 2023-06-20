import { StyleSheet } from "react-native";
// import { Dimensions } from 'react-native';
const styles = StyleSheet.create({
    header: {
      fontSize: 30,
      paddingBottom: 30,
      fontWeight: "bold",
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      lightColor:"#eee",
      marginTop: 30,
      darkColor:"rgba(255,255,255,0.1)"
      // background
    },
    innerContainer: {
      height: '50%',
      aspectRatio:0.8, // to maintain a square shape
      alignItems: 'center', // center horizontally
      justifyContent: 'center', // center vertically
      borderRadius: 10,
      backgroundColor: '#B9E9FA',
    },
    innerContainerBig: {
      height: '60%',
      // aspectRatio: 1, // to maintain a square shape
      alignItems: 'center', // center horizontally
      justifyContent: 'center', // center vertically
      borderRadius: 10,
      backgroundColor: '#B9E9FA',
    },
    logo: {
      backgroundColor: "#056ecf",
      height: 128,
      width: 128,
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
    taskTitle:{
      backgroundColor: "#fffff0",
      fontSize: 35,
      fontWeight: "bold",
      padding: 10,
      elevation: 4,
      margin: 10,
      marginBottom: 0,
      marginTop: 30,
      borderRadius: 10
    },
    taskItem:{
      backgroundColor: "#ffffff",
      fontWeight: "bold",
      padding: 10,
      marginVertical: 2,
      marginLeft: 30,
      paddingTop: 10,
      borderRadius: 10,
      width: '70%'
    },
    cameraContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 350,
      height: 350,

    },
    fixedRatio: {
      flex: 1,
      aspectRatio: 1,
    },
    LinkButton: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#0E86D4',
      alignSelf: 'center',
      alignItems: 'center',
    },
    field: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#34495e',
    },
    description: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      // fontWeight: 'bold',
      // textAlign: 'center',
      // color: '#34495e',
    },
  });


module.exports= styles
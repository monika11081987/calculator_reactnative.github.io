import React from "react";
import logo from "../assets/logo.jpg";
import { Image, StyleSheet, View } from "react-native";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

container:{
display:"flex",
flexDirection:"column",
height:'100%',
backgroundColor:"#ff5757",
alignItems:"center",
justifyContent:"center",
width:"100%",
},

inner:{
    height:100,
    width:100,
    backgroundColor:"inherit",
},

  img: {
    width: 100,
    height: 100,
  },
});

export default IntroScreen;

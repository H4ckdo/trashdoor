import React from "React";
import {View, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Style from "./style";

let SocialButton = (props) => {
  return (
    <View id="btnContainer" style={styles.buttonContainer}>
      <Icon.Button 
          raised
          primary
          name="facebook" 
          backgroundColor="#3b5998"
          style={Style.social}
          onPress={props.onPress}>
          Entrar con Facebook
      </Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    flexDirection: 'column',
    justifyContent: "center",
  }
});


export default SocialButton;

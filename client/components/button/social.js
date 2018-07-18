import React from "React";
import Icon from "react-native-vector-icons/FontAwesome";
import Style from "./style";

let SocialButton = (props) => {
  return (
    <Icon.Button 
        raised
        primary
        name="facebook" 
        backgroundColor="#3b5998"
        style={Style.social}
        onPress={props.onPress}>
        Entrar con Facebook
    </Icon.Button>
  );
}

export default SocialButton;

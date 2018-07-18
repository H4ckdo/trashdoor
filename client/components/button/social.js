import React from "React";
import Icon from "react-native-vector-icons/FontAwesome";


let SocialButton = (props) => {
  return (
      <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={props.onPress}>
          Login with Facebook
      </Icon.Button>
  );
}

export default SocialButton;

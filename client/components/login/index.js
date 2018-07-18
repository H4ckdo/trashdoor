import React from "React";
import SocialBtn from "../button/social";
import Icon from "react-native-vector-icons/FontAwesome";
import {View, Button, TouchableHighlight} from "react-native";

class LoginContainer extends React.Component {
    constructor(props) { 
        super();
    }

    // static navigationOptions = {
    //     title: "Login",
    // };

    __handlePress =() => {
        this.props.navigation.navigate('home');
    }

    // SocialButton = () => {
    //     return (
    //         <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.props.onPress}>
    //             Login with Facebook
    //         </Icon.Button>
    //     );
    // }

    render() {
      return (
        <View>
            <TouchableHighlight >
                <SocialBtn onPress={this.__handlePress}/>
            </TouchableHighlight >
        </View>
      );
    }
}

export default LoginContainer;
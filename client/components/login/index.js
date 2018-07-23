import React from "React";
import SocialBtn from "../button/social";
import {View, Button, TouchableHighlight, StyleSheet} from "react-native";
import Permissions from 'react-native-permissions'

class LoginContainer extends React.Component {
    constructor(props) { 
        super();
    }

    __handlePress =() => {
        this.props.navigation.navigate('home');
    }

    componentWillMount() {

    }

    componentDidMount() {
        Permissions.check('location').then(response => {
            // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
            this.setState({ locationPermission: response }, ()=> {
                console.log("Permission: ", this.state.locationPermission);
            });
        })
    }

    render() {
      return (
        <View style={styles.lgContainer}>
            <SocialBtn onPress={this.__handlePress}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    lgContainer: {
        flex:1,
        flexDirection: "column",
    }
});

export default LoginContainer;
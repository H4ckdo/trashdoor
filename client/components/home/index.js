import React from "react";
import MyComponent from "../MyComponent";
import MapComponent from "../maps";
import {Text, View, StyleSheet } from "react-native";

class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    static navigationOptions = {
        title: "Bienvenido",
    };

    render() {
        return (
            <View id="homeContainer" style={styles.homeContainer}>
                <MapComponent />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        flex:1
    }
});


export default Home;
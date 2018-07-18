import React from "react";
import MyComponent from "../MyComponent";
import {Text} from "react-navigation";

class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    static navigationOptions = {
        title: "Bienvenido",
    };

    render() {
        return (
            <MyComponent />
        );
    }
}

export default Home;
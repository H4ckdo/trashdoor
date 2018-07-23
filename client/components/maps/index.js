import React from "react";
import {View, Dimensions} from "react-native";
import MapView from 'react-native-maps';
const {width, height} = Dimensions.get("window");

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH  = width;

const ASPECT_RATIO = width/height;
const DELTA_LATITUDE = 0.09;
const DELTA_LONGITUDE = this.DELTA_LATITUDE * ASPECT_RATIO;

class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            marketPosition: {
                latitude: 0,
                longitud: 0
            }
        };

        this.watchId = null;
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let latitude = parseFloat(position.coords.latitude);
                let longitude = parseFloat(position.coords.longitude);
                console.log('latitude: ')
                let initialRegion = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: DELTA_LATITUDE,
                    longitudeDelta: DELTA_LONGITUDE
                };

                this.setState({
                    initialPosition: initialRegion,
                    marketPosition: initialRegion,
                })
            }, 

            (error) => {
                alert(JSON.stringify(error));
            },
            
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );

        this.watchId = navigator.geolocation.watchPosition( 
            (position) => {
                let latitude = parseFloat(position.coords.latitude);
                let longitude = parseFloat(position.coords.longitude);

                let lastRegion = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: DELTA_LATITUDE,
                    longitudeDelta: DELTA_LONGITUDE
                };

                this.setState({
                    initialPosition: lastRegion,
                    marketPosition: lastRegion,
                });
            },
            (error) => {
                alert(JSON.stringify(error));
            },
            {}
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId)
    }


    render() {
        return (
            <View id="mapContainer" style={styles.mapContainer}>
                <MapView 
                    style={styles.map} 
                    initialRegion = {this.state.initialPosition}
                />
            </View>
        );
    }
}

const styles = {
    mapContainer: {
        height: 200
    },
    map: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        position: 'absolute',
    }
}

export default MapComponent;
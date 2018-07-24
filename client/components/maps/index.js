import React from "react";
import {View, Dimensions} from "react-native";
import MapView from 'react-native-maps';
const {width, height} = Dimensions.get("window");

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH  = width;

const ASPECT_RATIO = width/height;
const DELTA_LATITUDE = 0.09;
const DELTA_LONGITUDE = DELTA_LATITUDE * ASPECT_RATIO;

class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRegion: {
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
    
    onUserLocationChange (e) {
        console.log('Has change', e);
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                let latitude = parseFloat(position.coords.latitude);
                let longitude = parseFloat(position.coords.longitude);
                debugger
                console.log('latitude: ', latitude, " Longitude: ",longitude);
                let initialRegion = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: DELTA_LATITUDE,
                    longitudeDelta: DELTA_LONGITUDE
                };

                this.setState({
                    initialRegion: initialRegion,
                    marketPosition: initialRegion,
                })
            }, 

            (error) => {
                alert(JSON.stringify(error));
            },
            
            {}
        );

        this.watchId = navigator.geolocation.watchPosition( 
            (position) => {
                let latitude = parseFloat(position.coords.latitude);
                let longitude = parseFloat(position.coords.longitude);
                console.log('latitude: ', latitude, " Longitude: ",longitude);

                let lastRegion = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: DELTA_LATITUDE,
                    longitudeDelta: DELTA_LONGITUDE
                };

                this.setState({
                    initialRegion: lastRegion,
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
        let { initialPosition, initialRegion } = this.state;
        console.log(initialRegion)
        return (
            <View id="mapContainer" style={styles.mapContainer}>
                <MapView 
                    style={styles.map} 
                    region = {{...this.state.initialRegion}}
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
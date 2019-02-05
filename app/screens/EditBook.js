import React, {Component} from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import FetchLocator from "../components/FetchLocator";
import LocatorMap from "../components/LocatorMap";
import { Actions } from "react-native-router-flux";

export default class BookMap extends Component {
  state = {
    userLocation: null,
  };

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421
          }
        });
      },
      err => console.log(err)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FetchLocator onGetLocation={this.getUserLocationHandler} />
        <LocatorMap
          userLocation={this.state.userLocation}
        />
        <Button
          title="Back to books"
          onPress={() => Actions.pop()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

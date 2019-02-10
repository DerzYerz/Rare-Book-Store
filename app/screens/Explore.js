import React, {Component} from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import FetchLocation from "../components/UsersMap/FetchLocation";
import UsersMap from "../components/UsersMap/UsersMap";

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
        fetch('https://bloggiedos.firebaseio.com/places.json', {
          method: 'POST',
          body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      },
      err => console.log(err)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap
          userLocation={this.state.userLocation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

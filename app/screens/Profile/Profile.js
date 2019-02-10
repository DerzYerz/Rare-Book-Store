import React, { Component } from 'react';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';
import {View} from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Thumbnail,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import TextField from '../../components/TextField';
import styles from './styles';;

async function allowCameraRollAccess() {
  const { Permissions } = Expo;
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status !== 'granted') {
    alert('Yo! Let us use your camera, bro.');
  }
}

allowCameraRollAccess();

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      image: null,
      error: '',
    };
  }

  uploadImage = async () => {
    allowCameraRollAccess();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  onSubmit(){
    fetch('https://bloggiedos.firebaseio.com/profiles.json', {
      method: 'POST',
      body: JSON.stringify({
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
      })
    })
    }

  render(){
    return (
      <Container style={styles.container}>
        <Content>
          <Form style={styles.mar10}>
            <TextField
              name="First Name"
              value={this.state.firstName}
              onChangeText={(text) => this.setState({firstName: text})}
            />
            <TextField
              name="Last Name"
              value={this.state.lastName}
              onChangeText={(text) => this.setState({lastName: text})}
            />
            <TextField
              name="Username"
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
            />
            <TextField
              secureTextEntry
              name="Password"
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
            />
          </Form>
          <Text style={styles.addPic}>Add a profile picture</Text>
          {
           !this.state.image &&
            <Button
              primary
              bordered
              onPress={this.uploadImage}
              style={styles.uploadButton}>
              <Icon
                size={30}
                name='camera'
              />
            </Button>
          }
          {
            this.state.image &&
            <Thumbnail
              size={80}
              source={{uri: this.state.image}}
              style={styles.thumbnail}
            />
          }
          <Button
            block
            style={styles.mar10}
            onPress={() => this.onSubmit()}
          >
            <Text>Create account</Text>
          </Button>
          <Text style={styles.formMsg}>{this.state.error}</Text>
          <Button
            transparent
            style={styles.loginBtn}
            onPress={() => Actions.onSubmit()}
          >
            <Text style={styles.loginTxt}>Already have an account?</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Profile;

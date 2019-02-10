import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Button,
} from 'native-base';
import { View } from 'react-native';
import TextField from '../../components/TextField';
import styles from './styles';

const mapStateToProps = state => ({
  user: state.user,
})

class AddBook extends Component {
  constructor(){
    super();
    this.state = {
      id: '',
      title: '',
      author: '',
      thumbnail: '',
      latitude: '',
      longitude: ''
    }
  }
  onSubmit() {
    fetch('https://bloggiedos.firebaseio.com/booklist.json', {
      method: 'POST',
      body: JSON.stringify({
        id: this.state.id,
        title: this.state.title,
        author: this.state.author,
        thumbnail: this.state.thumbnail
      })
    })
  }

  render(){
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.formMsg}>{this.state.error}</Text>
          <View style={styles.input}>
            <TextField
              name="What number book will this be?"
              value={this.state.post}
              onChangeText={(bookID) => this.setState({id: bookID})}
            />
            <TextField
              name="What's the title?"
              value={this.state.post}
              onChangeText={(bookTitle) => this.setState({title: bookTitle})}
            />
            <TextField
              name="Who's the author?"
              value={this.state.post}
              onChangeText={(bookAuthor) => this.setState({author: bookAuthor})}
            />
            <TextField
              name="Do you have an image of the cover?"
              value={this.state.post}
              onChangeText={(bookCover) => this.setState({thumbnail: bookCover})}
            />
            <Button
              rounded
              style={styles.button}
              onPress={() => this.onSubmit()}
            >
              <Text>Add the Book</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default AddBook;

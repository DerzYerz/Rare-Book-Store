import React, {Component} from 'react';
import {Dimensions, StyleSheet, Platform} from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { Scene, Router, Actions, Reducer, DrawerMenu, Drawer, Tabs, Modal } from 'react-native-router-flux';
import Bookcase from './screens/Bookcase';
import AddBook from './screens/AddBook';
import Lists from './screens/Lists';
import Profile from './screens/Profile';
import BookMap from './screens/Explore';
import BookLocator from './screens/EditBook';

let screen = Dimensions.get('window');

  const styles = StyleSheet.create({
    tabBarStyle: {
      backgroundColor: '#eee',
      color: 'black',
      fontWeight: 'bold',
      textAlign:'center',
    },
    tabBarSelectedItemStyle: {
      backgroundColor: '#ddd',
    },
  });

const scenes = Actions.create(
  <Scene key="root">
        <Scene key="main" tabs={true} tabBarStyle={styles.tabBarStyle}>
          <Scene
            key="bookcase"
            component={Bookcase}
            title="The Bookend"
            />
          <Scene key="bookmap" component={BookMap} title="Book Map" />
          <Scene key="addbook" component={AddBook} title="Add a Book" />
          <Scene key="profile" component={Profile} title="Profile" />
        </Scene>
      <Scene key="booklocator" component={BookLocator} title="Book Locator" />
  </Scene>
);

export default () => (
  <Router scenes={scenes} />
);

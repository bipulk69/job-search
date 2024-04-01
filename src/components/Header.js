/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable style={{marginLeft: 10}}>
            <MaterialIcons name="menu" color="black" size={24} />
          </Pressable>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Home
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Pressable style={{marginRight: 10}}>
            <Feather name="bookmark" color="black" size={24} />
          </Pressable>
          <Pressable style={{marginRight: 10}}>
            <Ionicons name="chatbox-outline" color="black" size={24} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;

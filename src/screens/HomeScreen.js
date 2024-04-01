/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  const trendingItems = [
    {
      id: '1',
      title: 'Placement guaranteed courses',
      text: 'Online Courses with Guaranteed Placement',
      color: 'blue',
    },
    {
      id: '2',
      title: 'Placement guaranteed courses',
      text: 'Online Courses with Guaranteed Placement',
      color: 'orange',
    },
    {
      id: '3',
      title: 'Placement guaranteed courses',
      text: 'Online Courses with Guaranteed Placement',
      color: 'purple',
    },
    {
      id: '4',
      title: 'Placement guaranteed courses',
      text: 'Online Courses with Guaranteed Placement',
      color: 'yellow',
    },
  ];

  const recommendedItems = [
    {
      id: '1',
      jobTitle: 'Sofware Developer',
      companyName: 'Google',
      location: 'Bangalore',
      salary: '₹ 10,00,000 - ₹ 15,00,000',
      jobType: 'Full-Time',
    },

    {
      id: '2',
      jobTitle: 'Backend Develoepr',
      companyName: 'Amazon',
      location: 'Bangalore',
      salary: '₹ 10,00,000 - ₹ 15,00,000',
      jobType: 'Full-Time',
    },

    {
      id: '3',
      jobTitle: 'Frontend Develoepr',
      companyName: 'Google',
      location: 'Bangalore',
      salary: '₹ 10,00,000 - ₹ 15,00,000',
      jobType: 'Full-Time',
    },

    {
      id: '4',
      jobTitle: 'JavaScript Develoepr',
      companyName: 'Google',
      location: 'Bangalore',
      salary: '₹ 10,00,000 - ₹ 15,00,000',
      jobType: 'Full-Time',
    },
  ];

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', gap: 10, marginLeft: 10}}>
            <Text style={{fontSize: 22, fontWeight: '600', color: 'black'}}>
              Hi, Bipul
            </Text>
            <MaterialCommunityIcons name="hand-wave" size={24} color="orange" />
          </View>
          <Text
            style={{
              fontSize: 14,
              color: 'gray',
              marginTop: 10,
              marginLeft: 10,
            }}>
            Let's help you land your dream jobs
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              Trending on Jobify
            </Text>
            <Fontisto name="fire" size={24} color="#FC6736" />
          </View>
          <FlatList
            data={trendingItems}
            renderItem={({item}) => (
              <View
                style={{
                  width: 350,
                  height: 200,
                  backgroundColor: item.color,
                  marginLeft: 10,
                  borderRadius: 10,
                  marginTop: 10,
                  padding: 10,
                }}>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: 'white'}}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 5,
                  }}>
                  {item.text}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginTop: 30, backgroundColor: '#DDF2FD'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
              marginTop: 20,
            }}>
            Recommended for you
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              gap: 3,
            }}>
            <Text style={{marginTop: 5, color: 'black', fontWeight: '500'}}>
              as per your{' '}
            </Text>
            <Pressable>
              <Text style={{color: 'blue', fontSize: 16}}>preferences</Text>
            </Pressable>
          </View>

          <FlatList
            data={recommendedItems}
            renderItem={({item}) => (
              <View
                style={{
                  width: 250,
                  height: 270,
                  backgroundColor: 'white',
                  marginLeft: 10,
                  borderRadius: 10,
                  borderColor: 'white',
                  marginTop: 20,
                  padding: 10,
                  borderWidth: 1,
                  marginBottom: 20,
                }}>
                <Text
                  style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
                  {item.jobTitle}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>{item.companyName}</Text>
                </View>

                <View
                  style={{
                    height: 1,
                    backgroundColor: 'gray',
                    marginHorizontal: 10,
                    marginTop: 20,
                  }}
                />

                <View style={{marginTop: 20}}>
                  <Text>{item.location}</Text>
                  <Text>{item.salary}</Text>
                  <Text>{item.jobType}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

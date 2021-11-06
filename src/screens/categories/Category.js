import React from "react";
import {View, Text, Image, StyleSheet, FlatList, useState} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

const DATA = [
    {
      title: 'First Item',
    },
    {
      title: 'Second Item',
    },
    {
      title: 'Third Item',
    },
    
  ];

  const renderItem = ({item}) => (
      <View style={{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }}>
          <Text style={{
              fontSize: 32,
          }}>
              {item.title}
          </Text>
      </View>
  )

function Category () {

    return(
        <View style={{
            flex: 1,
        }}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
        </View>
    )
}

export default Category;
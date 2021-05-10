import React, {useEffect, useCallback, Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Button,
  InteractionManager,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';
import {restaurantData} from '../data/dummy_restaurant';
import * as firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
//import {useDispatch, useSelector} from 'react-redux';
//import { toggleFavorite } from '../store/actions/meals';

const Home = ({navigation}) => {
  //Fire base authentication
  auth()
    .signInWithEmailAndPassword('nusrykaleel2014@gmail.com', 'nusrykaleel')
    .then(() => {
      console.log('User signed in Successfully!!!');
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });

  // Main Categories
  const categoryData = [
    {
      id: 1,
      name: 'Rice',
      icon: icons.rice_bowl,
    },
    {
      id: 2,
      name: 'Noodles',
      icon: icons.noodle,
    },
    {
      id: 3,
      name: 'Hot Dogs',
      icon: icons.hotdog,
    },
    {
      id: 4,
      name: 'Salads',
      icon: icons.salad,
    },
    {
      id: 5,
      name: 'Burgers',
      icon: icons.hamburger,
    },
    {
      id: 6,
      name: 'Pizza',
      icon: icons.pizza,
    },
    {
      id: 7,
      name: 'Snacks',
      icon: icons.fries,
    },
    {
      id: 8,
      name: 'Sushi',
      icon: icons.sushi,
    },
    {
      id: 9,
      name: 'Desserts',
      icon: icons.donut,
    },
    {
      id: 10,
      name: 'Drinks',
      icon: icons.drink,
    },
  ];

  /* const availableMeals = useSelector((state) => state.meals.meals);
  //  const mealId = navigation.getParam('mealId');
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
 */
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);

  /*  //Database
  const addToFavourites = (foodname) => {
    //get current user
    var user = auth().currentUser.uid;

    //get Unique key
    var databaseRef = database().ref(user).child('favourites').push();

    //update the foodname
    databaseRef.set({
      name: foodname,
    });
  }; */

  function onSelectCategory(category) {
    //filter restaurent
    let restaurentList = restaurantData.filter((a) =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurentList);
    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return '';
  }

  //Header
  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 40, marginTop: 10}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: '90%',
              height: '100%',
              backgroundColor: COLORS.lightGray3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
              paddingLeft: 6,
              paddingRight: 6,
            }}>
            <Text style={{fontSize: 16}}>No.52 Rose Ave, Colombo 06.</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  //Main Categories
  function renderMainCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{padding: 4}}>
        {/*  <View style={{flexDirection: 'row'}}>
          <Text style={{...FONTS.h3, fontWeight: 'bold', paddingLeft: 8}}>
            Main
          </Text>
        </View>
        <Text
          style={{
            ...FONTS.h3,
            fontWeight: 'bold',
            paddingLeft: 8,
            paddingTop: 0,
          }}>
          Categories
        </Text>
 */}
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding}}
        />
      </View>
    );
  }

  //SubCategory list
  function renderRestaurentList() {
    const renderItem = ({item}) => (
      <View
        style={{
          marginBottom: SIZES.padding * 2,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Restaurant', {
              item,
            })
          }>
          {/* Image */}
          <View
            style={{
              marginBottom: SIZES.padding,
            }}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: '100%',
                height: 180,
                borderRadius: SIZES.radius,
              }}
            />

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: 50,
                width: SIZES.width * 0.3,
                backgroundColor: COLORS.white,
                borderTopRightRadius: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center',
                ...styles.shadow,
              }}>
              <Text style={{...FONTS.h4}}>{item.duration} </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/*Restaurant Info*/}
        <Text
          style={{
            ...FONTS.body2,
          }}>
          {item.name}
        </Text>
        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: 'row',
          }}>
          {/*rating*/}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{...FONTS.body3}}>{item.rating}</Text>

          {/*Favourites*/}
          {/*  <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => addToFavourites(item.name)}>
              <Image
                source={icons.like}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 230,
                  marginTop: -15,
                  paddingRight: 10,
                  tintColor: COLORS.primary,
                }}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    );
    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurentList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;

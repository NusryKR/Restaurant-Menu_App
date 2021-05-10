import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  InteractionManager,
  Button,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';

const User = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Image
          source={images.profile}
          style={{
            borderRadius: 150 / 2,
            overflow: 'hidden',
            height: 100,
            width: 100,

            borderWidth: 4,
            borderColor: 'white',
          }}
        />
        <Text
          style={{
            ...FONTS.h2,
            color: 'white',
            paddingTop: 5,
            fontWeight: 'bold',
          }}>
          Nusry
        </Text>
        <Text style={{...FONTS.h3, color: 'white', paddingTop: 4}}>
          nusry@gmail.com
        </Text>
      </View>
      <Text
        style={{
          ...FONTS.h3,
          fontWeight: 'bold',
          marginLeft: 10,
          paddingTop: 20,
          paddingLeft: 10,
          paddingBottom: 15,
        }}>
        Details
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 10,
        }}>
        <Image
          source={images.location}
          style={{
            height: 40,
            width: 40,
            marginLeft: 20,
            tintColor: COLORS.primary,
          }}
        />
        <Text style={{...FONTS.body3, padding: 8}}>
          No.52 Rose Ave, Colombo 06
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 10,
        }}>
        <Image
          source={images.phone}
          style={{
            height: 30,
            width: 30,
            marginLeft: 20,
            tintColor: COLORS.primary,
          }}
        />
        <Text style={{...FONTS.body3, padding: 8}}> 011 254 4587</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 10,
        }}>
        <Image
          source={images.help}
          style={{
            height: 30,
            width: 30,
            marginLeft: 20,
            tintColor: COLORS.primary,
          }}
        />
        <Text style={{...FONTS.body3, padding: 8}}> Help & Feedback</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  buttonContainer: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    width: '100%',
    height: '45%',
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default User;

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
  InteractionManager,
} from 'react-native';
import {
  TextInput,
  Button,
  Snackbar,
  Portal,
  Dialog,
  Paragraph,
  Provider as PaperProvider,
} from 'react-native-paper';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';
//import {useSelector} from 'react-redux';
import {restaurantData} from '../data/dummy_restaurant';
import * as firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
//import {ListItem} from 'native-base';
//import ListView from 'deprecated-react-native-listview';

/* var data = [];
var currentUser; */

class Favourites extends Component {
  _isMounted = false;
  //New Try
  constructor(props) {
    super(props);

    currentUser = auth().currentUser;
    this.tasksRef = database().ref(currentUser.uid).child('favourites');

    const dataSource = [];
    this.state = {
      dataSource: dataSource,
      selecteditem: null,
      snackbarVisible: false,
      confirmVisible: false,
    };
  }

  //Read Data From Db
  componentDidMount() {
    this._isMounted = true;
    // start listening for firebase updates
    this.listenForTasks(this.tasksRef);
  }

  listenForTasks(tasksRef) {
    tasksRef.on('value', (dataSnapshot) => {
      var tasks = [];
      dataSnapshot.forEach((child) => {
        tasks.push({
          name: child.val().name,
          price: child.val().price,
          key: child.key,
        });
      });

      this.setState({
        dataSource: tasks,
      });
    });
  }

  //Delete Item
  deleteItem(item) {
    this.setState({deleteItem: item, confirmVisible: true});
  }
  performDeleteItem(key) {
    var updates = {};
    updates['/favourites/' + key] = null;
    return database().ref(currentUser.uid).update(updates);
  }

  //Delete Dialog
  hideDialog(yesNo) {
    this.setState({confirmVisible: false});
    if (yesNo === true) {
      this.performDeleteItem(this.state.deleteItem.key).then(() => {
        this.setState({snackbarVisible: true});
      });
    }
  }

  showDialog() {
    this.setState({confirmVisible: true});
    console.log('in show dialog');
  }

  undoDeleteItem() {
    this.addItem(this.state.deleteItem.name, this.state.deleteItem.price);
  }

  //Add Item for Undo
  addItem(itemName, itemPrice) {
    var newPostKey = database().ref(currentUser.uid).child('favourites').push()
      .key;

    var updates = {};
    updates['/favourites/' + newPostKey] = {
      name:
        itemName === '' || itemName == undefined
          ? this.state.itemname
          : itemName,
      price:
        itemPrice === '' || itemPrice == undefined
          ? this.state.itemprice
          : itemPrice,
    };

    return database().ref(currentUser.uid).update(updates);
  }

  //Render Items
  render() {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',

              backgroundColor: COLORS.primary,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                paddingRight: SIZES.padding * 2,
                paddingLeft: 20,
              }}>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  marginTop: 15,
                  paddingBottom: 15,
                }}>
                Favourites
              </Text>
            </View>
          </View>

          <View style={styles.listContainer}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => (
                <View>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      this.setState({
                        selecteditem: item,
                        itemname: item.name,
                        itemprice: item.price,
                      })
                    }>
                    <View style={styles.item}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                          paddingBottom: 10,
                          paddingRight: 150,
                        }}>
                        {item.name}{' '}
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Text style={{fontSize: 15}}>Rs. {item.price}.00</Text>
                        <View style={{marginLeft: 200, marginTop: -10}}>
                          <Text
                            style={{color: COLORS.primary}}
                            onPress={() => this.deleteItem(item)}>
                            <View>
                              <Image
                                source={icons.del}
                                resizeMode="contain"
                                style={{
                                  width: 20,
                                  height: 20,
                                  tintColor: COLORS.primary,
                                }}
                              />
                            </View>
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )}
            />
            <Text />

            <Portal>
              <Dialog
                visible={this.state.confirmVisible}
                onDismiss={() => this.hideDialog(false)}>
                <Dialog.Title>Confirm</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>Are you sure you want to delete this?</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={() => this.hideDialog(false)}>No</Button>
                  <Button onPress={() => this.hideDialog(true)}>Yes</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>

            <Snackbar
              visible={this.state.snackbarVisible}
              onDismiss={() => this.setState({snackbarVisible: false})}
              action={{
                label: 'Undo',
                onPress: () => {
                  // Do something
                  this.undoDeleteItem();
                },
              }}>
              Favorite Item deleted successfully.
            </Snackbar>
          </View>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  item: {
    flex: 1,
    fontSize: 3,
    marginTop: 15,
    backgroundColor: COLORS.white,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    height: 100,
    borderRadius: 15,
  },
});
export default Favourites;

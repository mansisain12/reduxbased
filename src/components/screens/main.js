import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, deleteUser, updateUser} from '../../actions/actions';
import TxtComponent from '../textfield';
import BtnComponent from '../buttonComponent';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Mainscreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [selectedUserIndex, setSelectedUserIndex] = useState(undefined);
  const [isModalVisible, setisModalVisible] = useState(false);
  const dispatch = useDispatch();
  const userList = useSelector(state => state.user.userList);

  const onPressSaveEdit = () => {
    dispatch(
      updateUser({name: name, age: age, hobbies: hobbies}, selectedUserIndex),
      setSelectedUserIndex(undefined),
    );
    setisModalVisible(false);
  };

  const submit = () => {
    dispatch(
      addUser({
        name: name,
        age: age,
        hobbies: hobbies,
      }),
    );
    setName('');
    setAge('');
    setHobbies('');
    setisModalVisible(true);
  };
  const editItem = item => {
    {
      item.name;
    }
    {
      item.age;
    }
    {
      item.hobbies;
    }
    setisModalVisible(true);
  };

  const deleteItem = () => {
    Alert.alert('Delete item', 'are you sure?', [
      {
        text: 'cancel',
        style: 'cancel',
      },
      {text: 'delete', onPress: () => dispatch(deleteUser())},
    ]);
  };

  const divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'black',
        }}
      />
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>{item.name}</Text>
          <Text> {item.age} </Text>
          <Text> {item.hobbies} </Text>
        </View>

        <TouchableOpacity style={styles.flatButton}>
          <Text
            style={styles.item}
            onPress={editItem}
            disabled={name.length === 0}>
            Edit
          </Text>
          <Text
            style={[styles.item, {backgroundColor: 'red'}]}
            onPress={deleteItem}
            disabled={name.length === 0}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={[styles.header, {borderBottomWidth: 1}]}>
        <Text style={styles.heading}>User List</Text>
        <BtnComponent title="Add" onPress={submit} />
      </View>

      <View style={styles.header}>
        <Text style={{fontSize: 16}}>User Details:</Text>
      </View>

      <FlatList
        data={userList}
        renderItem={renderItem}
        ItemSeparatorComponent={divider}
      />

      <Modal animationType="slide" visible={isModalVisible}>
        <Text style={styles.heading}>UserForm</Text>

        <TxtComponent
          placeholder="Name"
          onChangeText={name => setName(name)}
          defaultValue={name}
        />

        <TxtComponent
          placeholder="Age"
          onChangeText={age => setAge(age)}
          defaultValue={age}
        />

        <TxtComponent
          placeholder="Hobbies"
          onChangeText={hobbies => setHobbies(hobbies)}
          defaultValue={hobbies}
        />

        <View style={styles.btnstyle}>
          <BtnComponent
            disabled={name.length === 0}
            title="Update"
            onPress={onPressSaveEdit}
          />
          <BtnComponent
            title="cancel"
            onPress={() => setisModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnstyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  border: {
    borderBottomWidth: 1,
  },
  item: {
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  flatButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
});

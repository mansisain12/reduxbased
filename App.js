import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, updateUser} from './src/actions/actions';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';

export default function App() {
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
  const onPressItem = (item, index) => {
    setName(item.name);
    setAge(item.age);
    setHobbies(item.hobbies);
    setSelectedUserIndex(index);
  };
  const editItem = item => {
    {item.name}
    {item.age}
    {item.hobbies}
    setisModalVisible(true);
  };
  const deleteItem = () => {
    dispatch(updateUser({name: '', age: '', hobbies: ''}, selectedUserIndex));
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
      <TouchableOpacity onPress={() => onPressItem(item, index)}>
        <Text>{item.name}</Text>
        <Text> {item.age} </Text>
        <Text> {item.hobbies} </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={[styles.header, {borderBottomWidth: 1}]}>
        <Text style={styles.heading}>User List</Text>
        <Button title="Add" onPress={submit} />
      </View>

      <View style={styles.header}>
        <Text style={{fontSize: 16}}>User Details:</Text>
        <Button onPress={editItem} disabled={name.length === 0} title="Edit" />
      </View>

      <FlatList
        data={userList}
        renderItem={renderItem}
        ItemSeparatorComponent={divider}
      />
      <Button title="Delete" onPress={deleteItem} />

      <Modal animationType="slide" visible={isModalVisible}>
        <Text style={styles.heading}>UserForm</Text>
        <TextInput
          style={styles.userinput}
          placeholder="Name"
          onChangeText={name => setName(name)}
          defaultValue={name}
          editable={true}
        />
        <TextInput
          style={styles.userinput}
          placeholder="Age"
          onChangeText={age => setAge(age)}
          defaultValue={age}
          editable={true}
        />

        <TextInput
          style={styles.userinput}
          placeholder="Hobbies"
          onChangeText={hobbies => setHobbies(hobbies)}
          defaultValue={hobbies}
          editable={true}
        />

        <View style={styles.btnstyle}>
          <Button
            disabled={name.length === 0}
            title="Update"
            onPress={onPressSaveEdit}
          />
          <Button title="cancel" onPress={() => setisModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  userinput: {
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
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
});

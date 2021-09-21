/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Image source={require('./Layer3.png')} />
      </View>
      <View style={styles.modal}>
        <View>
          <Text style={styles.label}>Tài khoản</Text>
          <TextInput
            style={styles.input}
            placeholder="Email hoặc số điện thoại"></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"></TextInput>
        </View>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 18.75,
            color: '#167FD2',
          }}>
          Quên mật khẩu?
        </Text>

        <TouchableOpacity style={styles.colorButton}>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: 16,
              lineHeight: 18.75,
            }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: '#1F396C',
              fontWeight: '700',
              fontSize: 16,
              lineHeight: 18.75,
            }}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerBar: {
    position: 'absolute',
    width: '100%',
    height: 266,
    left: 0,
    top: 0,
    backgroundColor: '#4786FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
    position: 'absolute',
    width: 335,
    height: 349,
    top: 219,
    left: (Dimensions.get('window').width - 335) / 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 20,
    justifyContent: 'space-evenly',
  },
  button: {
    width: 287,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
  colorButton: {
    width: 287,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#1F396B',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '700',
    color: '#1F396C',
  },
  input: {
    width: 287,
    height: 40,
    borderWidth: 1,
    borderColor: '#1F396B',
    borderRadius: 4,
    fontSize: 16,
    lineHeight: 19,
  },
});

export default App;

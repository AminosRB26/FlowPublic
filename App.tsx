import React, { useEffect } from 'react';
import { View, StatusBar, LogBox, StyleSheet } from 'react-native';
import Root from './routes/Root';
import auth from '@react-native-firebase/auth';
import UserStore, { updateUser } from './redux/store';
import { Provider } from 'react-redux';
import ModalProvider from './utils/ModalContext';
import firestore from '@react-native-firebase/firestore';
import Store from './redux/store';

const App = () => {

  useEffect(() => {
    LogBox.ignoreAllLogs();

    var listener: (() => void);

    auth().onAuthStateChanged(user => {
      if (user) {
        listener = firestore()
          .collection('users')
          .doc(user.uid)
          .onSnapshot(snapshot => {
            if (snapshot.exists) {
              Store.dispatch(updateUser(snapshot.data() as User));
            }
          });
      }
    });

    return () => {
      listener && listener();
    };

  }, []);

  return (
    <ModalProvider>
      <Provider store={UserStore}>
        <View style={styles.root}>
          <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
          <Root />
        </View>
      </Provider>
    </ModalProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;

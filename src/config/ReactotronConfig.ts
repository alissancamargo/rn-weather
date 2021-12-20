import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron: any;
  }
}

const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
  // Example to config for Windows
  // .configure({ host: '192.168.0.71' })
  .configure()
  .use(reactotronRedux())
  .use(sagaPlugin({ except: [''] }))
  .useReactNative({
    errors: false,
  })
  .connect();

tron.clear!();

console.tron = tron;

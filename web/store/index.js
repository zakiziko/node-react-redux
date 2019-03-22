import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/index';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer  = persistReducer(persistConfig,rootReducer);
const store = createStore(persistedReducer,applyMiddleware(thunk));
const persistor = persistStore(store)
// export default store;
let test = {store,persistor}
export default test;
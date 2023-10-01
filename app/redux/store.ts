import { configureStore } from '@reduxjs/toolkit';
import compartmentDataReducer from './slices/compartmentSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from './storage' // defaults to localStorage for web



const persistConfig = {
  key: 'root',
  storage, // Use the storage method (local storage by default)
};

const persistedReducer = persistReducer(persistConfig, compartmentDataReducer);
const store = configureStore({
  reducer: {
    compartmentData: persistedReducer
  }, // We'll add reducers here
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});


const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

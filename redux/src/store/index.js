import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import {usersReducer} from "./slices/userSlice"
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
    reducer:{
        users: usersReducer,
        //go and look upo the reducer path property. put a new key inside of this object of whatever key thats in
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    //needed for rtk query
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware);
    }
});

//needed for rtk query
setupListeners(store.dispatch);


export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
export {useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation} from './apis/photosApi';

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';


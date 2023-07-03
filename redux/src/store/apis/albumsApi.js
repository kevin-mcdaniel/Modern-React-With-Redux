import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

//DEV ONLY TEST FUNCTION TO ADD PAUSE
const pause = (duration) =>{
    return new Promise((resolve) =>{
        setTimeout(resolve, duration)
    })
}

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3005',
        fetchFn: async (...args) => { //add a function to be called when query runs
            //REMOVE IN PRODUCTION
            await pause(1000)
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                /* providesTags: ['Album'] *///add tags to be able to reload when data out of date - name doesn't matter. 
                //can use a string(All components reload) or an object with an id for a single component(using a function)
                providesTags: (result, error, user) => { //function returns result, error, arg
                    /* return [{
                        type: 'Album',
                        id: user.id
                    }] */
                    
                    //the proper way to deal with needing multiple data points is to make multiple tags
                    const tags = result.map(album => {
                        return {type:'Album', id:album.id}
                    });

                    tags.push({type: 'UserAlbums', id: user.id});
                    
                    return tags;
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params:{
                            userId: user.id
                        },
                        method:'GET'
                    }
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => { 
                    /* return [{
                        type: 'Album',
                        id: user.id
                    }] */
                    return [{ type: 'UsersAlbums', id: user.id}]
                }, 
                query:(user) =>{
                    return{
                        url: '/albums',
                        method:'POST',
                        body:{
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) =>{
                    /* return [{
                        type:'Album',
                        id: album.userId //Album already has user id so we can use that. Otherwise we'd need to attach an id in the component call
                    }] */

                    return [{ type: 'Album', id: album.id }]
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method:'DELETE',
                    }
                }
            })
        }
    }
})

export const {useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} = albumsApi;
export {albumsApi};
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "Songs", id: "LIST" };
const DATA_ALL_TRACKS = { type: "Songs", id: "LIST" };
export const queryApi = createApi({
    reducerPath: 'queryApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/'}),
    endpoints: (build) => ({
        getLikeSongs: build.query({
            query: (Mass) => ({
                url: 'favorite/all/',
                method: 'GET',
                headers: Mass,
            }),
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
        postLike: build.mutation({
            query: (access) => ({
                url: `${access[1].id}/favorite/`,
                method: 'POST',
                headers: access[0],
            }),
            invalidatesTags: [DATA_TAG]
        }),
        postDisLike: build.mutation({
            query: (access) => ({

                url: `${access[1].id}/favorite/`,
                method: 'DELETE',
                headers: access[0],
            }),
            invalidatesTags: [DATA_TAG]
        })
    })
})


export const MainApi = createApi({
    reducerPath: 'MainApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/all/'}),
    endpoints: (build) => ({
        getAllSongs: build.query({
            query: () => ({
                url: '',
                method: 'GET',
            }),
            providesTags: (result = []) => [
                DATA_ALL_TRACKS
              ],
        }),
    }),

})



export const { useGetLikeSongsQuery, usePostLikeMutation, usePostDisLikeMutation } = queryApi;
export const { useGetAllSongsQuery } = MainApi;

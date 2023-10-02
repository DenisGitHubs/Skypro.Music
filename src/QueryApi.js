import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const queryApi = createApi({
    reducerPath: 'queryApi',
    tagTypes: ['Likes'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/'}),
    endpoints: (build) => ({
        getLikeSongs: build.query({
            query: (Mass) => ({
                url: 'track/favorite/all/',
                method: 'GET',
                headers: Mass,
            })

        }),
        postLike: build.mutation({
            query: (access) => ({

                url: `track/${access[1].id}/favorite/`,
                method: 'POST',
                headers: access[0],
            }),

        }),
        postDisLike: build.mutation({
            query: (access) => ({

                url: `track/${access[1].id}/favorite/`,
                method: 'DELETE',
                headers: access[0],
            }),
            invalidatesTags: [{type: 'Likes', id: 'list'}]
        })
    })
})
export const { useGetLikeSongsQuery, usePostLikeMutation, usePostDisLikeMutation } = queryApi;



// getLikeSongs: build.mutation({
//     query: (accessToken) => ({
//         url: 'track/favorite/all/',
//         method: 'GET',
//         accessToken,

//     })
// }),
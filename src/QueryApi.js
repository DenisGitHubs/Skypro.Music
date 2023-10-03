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
            }),
            providesTags: (result) =>
            result
              ? [...result.map(({ id }) => ({ type: 'Likes', id })),
              {type: 'Likes', id: 'LIST'},]
              : [{type: 'Likes', id: 'LIST'}],
        }),
        postLike: build.mutation({
            query: (access) => ({

                url: `track/${access[1].id}/favorite/`,
                method: 'POST',
                headers: access[0],
            }),
            invalidatesTags: [{ type: 'Likes', id: 'LIST'}]
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

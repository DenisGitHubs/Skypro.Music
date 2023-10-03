import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "Songs", id: "LIST" };

export const queryApi = createApi({
    reducerPath: 'queryApi',

    baseQuery: fetchBaseQuery({baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/'}),
    endpoints: (build) => ({
        getLikeSongs: build.query({
            query: (Mass) => ({
                url: 'track/favorite/all/',
                method: 'GET',
                headers: Mass,
            }),
            providesTags: (result = []) => [
                DATA_TAG,
              ],
        }),
        postLike: build.mutation({
            query: (access) => ({

                url: `track/${access[1].id}/favorite/`,
                method: 'POST',
                headers: access[0],
            }),
            invalidatesTags: [DATA_TAG]
        }),
        postDisLike: build.mutation({
            query: (access) => ({

                url: `track/${access[1].id}/favorite/`,
                method: 'DELETE',
                headers: access[0],
            }),
            invalidatesTags: [DATA_TAG]
        })
    })
})
export const { useGetLikeSongsQuery, usePostLikeMutation, usePostDisLikeMutation } = queryApi;

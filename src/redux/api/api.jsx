import { createApi } from "@reduxjs/toolkit/query/react";
import {axios_instance} from '../../axios/instance';

export const api = createApi({
    reducerPath: "api",
    // args -> includes the query parameters, request body, and other 
    //         information required for the API request.

    // api -> includes information about the base URL endpoints and other
    //        configurations.

    // extraOptions -> it is an object that includes additional options passed
    //                 to the baseQuery function.
    //              -> it provides extra information or configurations.
    baseQuery: async(args, extraOptions)=>{
        const { endpoint, query, body } = args;

        try{
            const response = await axios_instance({
                method: (extraOptions && extraOptions.method) || 'get',
                url: `${endpoint}`,
                params: query,
                data:body
            })
            return {data: response.data}
        } catch(error) {
            console.error('Error in baseQuery:', error);
            throw error;
        }
    },
    endpoints: (builder)=>({
        getData: builder.query({
            query: () => ({endpoint: '/posts'})
        })
    })
});

export const { useGetDataQuery } = api;
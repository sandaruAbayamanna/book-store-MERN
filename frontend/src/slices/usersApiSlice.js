 import { apiSlice } from "./apiSlice";
 const USERS_URL = 'http://localhost:5555/auth';

 export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        login:builder.mutation({
            query:(data) =>({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body:data
            })
        }),

       /*  logout:builder.mutation({
            query: ()=>({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }) */
    })
 })

 export const { useLoginMutation, useLogoutMutation}  = usersApiSlice;
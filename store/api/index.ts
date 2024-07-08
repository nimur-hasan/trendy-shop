import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiTags } from "./tags";

const deployEnv = process.env.NEXT_PUBLIC_DEPLOY_ENV;

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  tagTypes: apiTags,
  baseQuery: (args, WebApi, extraOptions) => {
    return fetchBaseQuery({
      baseUrl: process.env.BACKEND_URL,
      prepareHeaders: async (headers, { getState, endpoint }) => {
        // @ts-ignore
        const user = getState().user;
        // //console.log("🚀 ~ file: index.ts:26 ~ prepareHeaders: ~ user:", user)
        const authToken = "Bearer " + user.jwt;

        //console.log("🚀 ~ file: index.ts:28 ~ prepareHeaders: ~ authToken:", authToken)
        // const foo = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0cmFkaW5nZmVlZCIsInN1YiI6Im1hcmNvIiwiaWF0IjoxNjk2NDM3OTk0LCJleHAiOjE2OTY0NDA1ODYsImp0aSI6IjI2MTY1NDZlLWI0YWMtNGNmMi1iZmM4LTVkZTQzOWUzMDJlMCIsImF1ZCI6IkFETUlOIiwibmJmIjoxNjk2NDM3OTk1fQ.kVz2a-ZCPSiGZvfBfjc9x9NLd7xHfuaUwxCJpEntOgfoKGjyuC9OI_sViRWuFQbvXHib-V8gapMEaALZlgeSwA'
        headers.delete("Authorization");
        headers.set("Authorization", authToken);
        headers.set("Accept", "application/json");

        return headers;
      },
    })(args, WebApi, extraOptions);
  },
  endpoints: (builder) => ({}),
});

export default api;

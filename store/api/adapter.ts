// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// // Create an Axios instance with custom configuration
// export interface IHttpAdapter extends AxiosInstance {}
// const axiosInstance: AxiosInstance = axios.create({
//   baseURL: process.env.BACKEND_URL, // Replace with your API base URL
//   timeout: 5000, // Set your preferred timeout
//   // Other custom configurations...
// });

// // Add request interceptor (if needed)
// axiosInstance.interceptors.request.use(
//   (config: any) => {
//     // You can modify the request config here
//     // For example, add headers or authentication tokens
//     // config.headers.Authorization = `Bearer ${yourToken}`;
//     return config;
//   },
//   (error: any) => {
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor (if needed)
// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     // You can process the response here
//     // For example, check for error codes or format the data
//     return response;
//   },
//   (error: any) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

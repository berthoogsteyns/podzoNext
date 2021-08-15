import useSWR from "swr";
import axios from "axios";
import { Restaurant } from "../models/Restaurant";

const { NEXT_PUBLIC_BASE_URL } = process.env;
const { NEXT_PUBLIC_API_KEY } = process.env;

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const instance = axios.create({
  method: "GET",
  baseURL: NEXT_PUBLIC_BASE_URL,
  headers: {
    "user-key": NEXT_PUBLIC_API_KEY,
  },
});
const fetcher = (url: string) => instance.get(url).then((res) => res.data);
type ApiResponse = {
  restaurants: { restaurant: Restaurant }[];
  results_found: number;
  results_shown: number;
  results_start: number;
};
export const useGetRestaurants = ({ query = "", start = 0 }) => {
  // console.log("env", NEXT_PUBLIC_BASE_URL);
  const { data, error, isValidating } = useSWR<ApiResponse>(
    `/search?q=${query}&start=${start}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading: isValidating || (!error && !data),
  };
};

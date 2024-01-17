// citySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
interface CityState {
  cityInfo: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface FetchCityInfoResponse {
  [x: string]: any;
  data: any;
}

export const fetchCityInfo = createAsyncThunk<FetchCityInfoResponse, string>(
  "city/fetchCityInfo",
  async (cityName) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${cityName}`
    );

    return response.data;
  }
);

const citySlice = createSlice({
  name: "city",
  initialState: {
    cityInfo: null,
    status: "idle",
    error: null,
  } as CityState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCityInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedData = action.payload.map((item: any) => {
          return {
            name: item.name,
            capital: item.capital,
            region: item.region,
            subregion: item.subregion,
            population: item.population,
            flags: item.flags,
            languages: item.languages,
            currencies: item.currencies,
            tld: item.tld,
            borders: item.borders,
            cioc: item.cioc,
            coatOfArms: item.coatOfArms,
            startOfWeek: item.startOfWeek,
            capitalInfo: item.capitalInfo,
            postalCode: item.postalCode,
            latlng: item.latlng,
            maps: item.maps,
          };
        });

        state.cityInfo = loadedData;
      })
      .addCase(fetchCityInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },


});

export const selectCityInfo = (state: RootState) => state.city.cityInfo;
export const selectCityStatus = (state: RootState) => state.city.status;
export const selectCityError = (state: RootState) => state.city.error;

export const cityActions = citySlice.actions;

export default citySlice.reducer;

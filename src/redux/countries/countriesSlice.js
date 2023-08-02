/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://restcountries.com/v3.1/all';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async (thunkAPI) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('ooops smoething wrent wrong');
  }
});

const initialState = {
  countries: [],
  isLoading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'Countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      const fetchData = action.payload.map((country) => {
        const items = {};
        items.id = uuidv4();
        items.name = country.name.official;
        items.capital = country.capital;
        items.region = country.region;
        items.flags = country.flags.png;
        items.population = country.population;
        items.area = country.area;
        return items;
      });
      state.countries = fetchData;
    });

    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default countriesSlice.reducer;

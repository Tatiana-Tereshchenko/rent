import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6521afbca4199548356d7b4a.mockapi.io/';


export const fetchAdverts = createAsyncThunk(
  'Advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/Advert');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
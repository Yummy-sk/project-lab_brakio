import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://raw.githubusercontent.com/Yummy-sk/project-lab__data/main/data.json';

const initialState = {
    list: [],
    status: null,
};

export const fetch = createAsyncThunk('info/fetch', async () => await axios.get(baseURL));

const infoSlice = createSlice({
    name: 'data',
    initialState: initialState,
    extraReducers: {
        [fetch.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetch.fulfilled]: (state, { payload }) => {
            state.list = payload.data;
            state.status = 'success';
        },
        [fetch.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default infoSlice.reducer;

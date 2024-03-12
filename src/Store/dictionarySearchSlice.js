import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDictionary } from "../Api";

export const fetchDictionaryApi = createAsyncThunk("fetchDictionarys", async (inputData) => {
    const data = await fetchDictionary(inputData)
    console.log(data);

    return data
})

export const dictionarySearchSlice = createSlice({
    name: "dictionary",
    initialState: {
        dictionaryData: [null],
        lodingStatus: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDictionaryApi.fulfilled, (state, action) => {
                state.dictionaryData = action.payload,
                    state.lodingStatus = false
            })
            .addCase(fetchDictionaryApi.pending, (state, action) => {
                state.lodingStatus = true
            })

    }
})


export default dictionarySearchSlice.reducer
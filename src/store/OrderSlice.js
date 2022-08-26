import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";






export const STATUS = Object.freeze({
    IDLE: "idle",

    LOADING: "loading",
    ERROR: "error",
})



const OrderSlice = createSlice({
    name: "order",


    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.pending, (state, action) => {
                state.status = STATUS.LOADING
            }
            )
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            }
            )
            .addCase(fetchOrder.rejected, (state, action) => {
                state.status = STATUS.ERROR
            }
            )

    }


})


export default OrderSlice.reducer;

export const fetchOrder = createAsyncThunk("fetch/order",
    async () => {
        const baseURL = process.env.REACT_APP_BASEURL;

        const res = await axios.get(`${baseURL}/orders/getOrder`)
        const data = res.data;
        return data




    }
)
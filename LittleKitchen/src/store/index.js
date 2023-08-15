import {configureStore, createSlice} from "@reduxjs/toolkit";

const stuSlice = createSlice({
    name: "stu",
    initialState: {
        name: "Laura",
        age: 18,
        gender: "Female",
        address: "Shanghai"
    },
    reducers: {
        setName(state, action) {
            state.name = "Rana";
        }
    }
});

export const {setName, setAge} = stuSlice.actions;

const store = configureStore({
    reducer: {
        student: stuSlice.reducer
    }
})

export default store;
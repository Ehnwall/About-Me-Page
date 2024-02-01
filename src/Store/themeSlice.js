import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "TOGGLE_THEME",
    initialState: {
        darkmode: false,
    },
    reducers: {
        ToggleTheme: (state) => {
            state.darkmode = !state.darkmode;
        },
    },
});

export const { ToggleTheme } = themeSlice.actions;
export const isDarkmode = (state) => state.theme.darkmode;
export default themeSlice.reducer;

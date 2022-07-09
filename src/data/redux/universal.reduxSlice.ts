import { createSlice } from "@reduxjs/toolkit";

export const universalSlice = createSlice({
  name: "universal",
  initialState: {
    contactTab: false,
    error: {} as Object | string,
    loadingStatus: 0,
  },
  reducers: {
    OpenContactTab: (state, action) => {
      return {
        ...state,
        contactTab: true,
      };
    },
    CloseContactTab: (state, action) => {
      return {
        ...state,
        contactTab: false,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    setLoadingStatus: (state, action) => {
      return {
        ...state,
        loadingStatus: action.payload,
      };
    },
  },
});

export const { setError, setLoadingStatus, OpenContactTab, CloseContactTab } = universalSlice.actions;
export const selectUniversalStates = (state: any) => {
  return state.universal;
};
export default universalSlice.reducer;

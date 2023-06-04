import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NavState {
  index: number;
}

const initialState: NavState = {
  index: 0,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
  },
});

export const { setActiveIndex } = navSlice.actions;
export default navSlice.reducer;

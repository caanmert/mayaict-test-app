import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Region } from "react-native-maps";

interface UserState {
  initialRegion: Region;
}

const initialState: UserState = {
  initialRegion: {
    latitude: 41.09997120315957,
    longitude: 29.042493905509623,
    latitudeDelta: 343,
    longitudeDelta: 343,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInitialRegion: (state, action: PayloadAction<Region>) => {
      state.initialRegion = action.payload;
    },
  },
});

export const { setInitialRegion } = userSlice.actions;

export default userSlice.reducer;

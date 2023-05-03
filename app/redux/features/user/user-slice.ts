import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Region } from "react-native-maps";

interface UserState {
  initialRegion: Region;
}

const initialState: UserState = {
  initialRegion: {
    latitude: 41.0999712031,
    longitude: 29.0424939055,
    latitudeDelta: 39.5,
    longitudeDelta: 39.5,
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

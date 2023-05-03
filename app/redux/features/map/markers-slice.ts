import { createSlice } from "@reduxjs/toolkit";
import { markers } from "../../../data";
import { MarkerT } from "../../../types";

interface MarkersState {
  markers: MarkerT[];
}

const initialState: MarkersState = {
  markers: markers,
};

export const markersSlice = createSlice({
  name: "markers",
  initialState,
  reducers: {},
});

export default markersSlice.reducer;

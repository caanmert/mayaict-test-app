import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user-slice";
import markersReducer from "./features/map/markers-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    map: markersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

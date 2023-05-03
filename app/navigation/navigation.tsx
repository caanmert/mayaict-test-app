import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./tab-navigator";

import * as Location from "expo-location";
import { useAppDispatch } from "../redux/hooks";
import { setInitialRegion } from "../redux/features/user/user-slice";

const Navigation = () => {
  const [errorMsg, setErrorMsg] = useState<String>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 39.5,
        longitudeDelta: 39.5,
      };
      dispatch(setInitialRegion(region));
    })();
  }, []);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

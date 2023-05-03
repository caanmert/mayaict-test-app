import { RouteProp } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, FilterScreen, HowToScreen, MapScreen, NotificationScreen } from "../screens";
import { Ionicons } from "@expo/vector-icons";

type TabsParamList = {
  Chat: undefined;
  Filter: undefined;
  HowTo: undefined;
  Map: undefined;
  Notification: undefined;
};

type TabsRouteProp = RouteProp<TabsParamList, keyof TabsParamList>;

const Tab = createBottomTabNavigator<TabsParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: true }}>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false, tabBarIcon: () => <Ionicons name="map" size={16} /> }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ tabBarIcon: ({ focused }) => <Ionicons name="chatbox" size={16} /> }}
      />
      <Tab.Screen
        name="Filter"
        component={FilterScreen}
        options={{ tabBarIcon: () => <Ionicons name="filter" size={16} /> }}
      />
      <Tab.Screen
        name="HowTo"
        component={HowToScreen}
        options={{ tabBarIcon: () => <Ionicons name="book" size={16} /> }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ tabBarIcon: () => <Ionicons name="notifications" size={16} /> }}
      />
    </Tab.Navigator>
  );
};

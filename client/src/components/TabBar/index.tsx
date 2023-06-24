import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

interface Icons {
  [key: string]: string;
}

const icons: Icons = {
  Home: "local-movies",
  Saved: "bookmark-outline",
  Profile: "person-outline",
};

const index = ({ state, descriptors, navigation }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 40,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, { merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center", paddingVertical: 20 }}
            key={index}
          >
            <Icon
              name={icons[route.name]}
              size={24}
              color={isFocused ? "#000" : "#999999"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default index;

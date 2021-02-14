import React from "react";
import { View } from "react-native";
import { Icon } from "../Icon";
import { BottomBarStyleSheet as styles } from "./BottomBar.styles";

const plusIcon = require("../../../src/images/icons/plus-circle.png");
const plusIconActive = require("../../../src/images/icons/plus-circle-1.png");
const bellIcon = require("../../../src/images/icons/bell.png");
const bellIconActive = require("../../../src/images/icons/bell-1.png");
const homeIcon = require("../../../src/images/icons/home.png");
const homeIconActive = require("../../../src/images/icons/home-1.png");
const searchIcon = require("../../../src/images/icons/search.png");
const searchIconActive = require("../../../src/images/icons/search-1.png");

export interface BottomBarProps {
  navigate?: any;
  activeIcon?: string;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  navigate,
  activeIcon,
}) => {
  console.debug(activeIcon);
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => {
          if (activeIcon !== "Home") {
            navigate("Home");
          }
        }}
        icon={homeIcon}
        active={activeIcon === "Home"}
        activeIcon={homeIconActive}
      />
      <Icon
        onPress={() => {
          if (activeIcon !== "Search") {
            navigate("Search");
          }
        }}
        active={activeIcon === "Search"}
        icon={searchIcon}
        activeIcon={searchIconActive}
      />
      <Icon
        onPress={() => {
          if (activeIcon !== "Plus") {
            navigate("Plus");
          }
        }}
        active={activeIcon === "Plus"}
        icon={plusIcon}
        activeIcon={plusIconActive}
      />
      <Icon
        onPress={() => {
          if (activeIcon !== "Notifications") {
            navigate("Notifications");
          }
        }}
        active={activeIcon === "Notifications"}
        icon={bellIcon}
        activeIcon={bellIconActive}
      />
      <Icon
        onPress={() => {
          if (activeIcon !== "Profile") {
            navigate("Profile");
          }
        }}
        active={activeIcon === "Profile"}
        icon={bellIcon}
        activeIcon={bellIconActive}
      />
    </View>
  );
};

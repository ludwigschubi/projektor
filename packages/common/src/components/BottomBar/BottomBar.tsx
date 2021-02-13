import React from "react";
import { View } from "react-native";
import { Icon } from "../Icon";
import { BottomBarStyleSheet as styles } from "./BottomBar.styles";

const plusIcon = require("../../../src/images/icons/plus-circle.png");
const plusIconActive = require("../../../src/images/icons/plus-circle-1.png");
const bellIcon = require("../../../src/images/icons/bell.png");
const bellIconActive = require("../../../src/images/icons/bell.png");
const homeIcon = require("../../../src/images/icons/home.png");
const homeIconActive = require("../../../src/images/icons/home-1.png");
const searchIcon = require("../../../src/images/icons/search.png");
const searchIconActive = require("../../../src/images/icons/search-1.png");

export const BottomBar: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Icon icon={homeIcon} activeIcon={homeIconActive} />
      <Icon icon={searchIcon} activeIcon={searchIconActive} />
      <Icon icon={plusIcon} activeIcon={plusIconActive} />
      <Icon icon={bellIcon} activeIcon={bellIconActive} />
      <Icon icon={bellIcon} activeIcon={bellIconActive} />
    </View>
  );
};

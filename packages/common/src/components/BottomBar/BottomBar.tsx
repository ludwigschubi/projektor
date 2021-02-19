import React from 'react';
import { View } from 'react-native';

import { Icon } from '../Icon';
import { ProfilePicture } from '../ProfilePicture';

import { BottomBarStyleSheet as styles } from './BottomBar.styles';

const plusIcon = require('../../../src/assets/icons/plus-circle.png');
const plusIconActive = require('../../../src/assets/icons/plus-circle-1.png');
const bellIcon = require('../../../src/assets/icons/bell.png');
const bellIconActive = require('../../../src/assets/icons/bell-1.png');
const homeIcon = require('../../../src/assets/icons/home.png');
const homeIconActive = require('../../../src/assets/icons/home-1.png');
const searchIcon = require('../../../src/assets/icons/search.png');
const searchIconActive = require('../../../src/assets/icons/search-1.png');

export interface BottomBarProps {
  navigate?: any;
  activeIcon?: string;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  navigate,
  activeIcon,
}) => {
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => {
          if (activeIcon !== 'Home') {
            navigate('Home');
          }
        }}
        icon={homeIcon}
        active={activeIcon === 'Home'}
        activeIcon={homeIconActive}
      />
      <Icon
        onPress={() => {
          if (activeIcon !== 'Search') {
            navigate('Search');
          }
        }}
        active={activeIcon === 'Search'}
        icon={searchIcon}
        activeIcon={searchIconActive}
      />
      <Icon
        onPress={() => {
          if (activeIcon !== 'Plus') {
            navigate('Plus');
          }
        }}
        active={activeIcon === 'Plus'}
        icon={plusIcon}
        activeIcon={plusIconActive}
      />
      <Icon
        onPress={() => {
          if (activeIcon !== 'Notifications') {
            navigate('Notifications');
          }
        }}
        active={activeIcon === 'Notifications'}
        icon={bellIcon}
        activeIcon={bellIconActive}
      />
      <ProfilePicture
        onPress={() => {
          if (activeIcon !== 'Profile') {
            navigate('Profile');
          }
        }}
        active={activeIcon === 'Profile'}
      />
    </View>
  );
};

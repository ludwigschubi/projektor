import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ImageSourcePropType, Dimensions, Animated } from 'react-native';

import { LoadingAnimationStyleSheet as styles } from './LoadingAnimation.styles';

const LOADING_ANIMATION_1 = require('../../../src/assets/images/LoadingAnimation_1.png');
const LOADING_ANIMATION_2 = require('../../../src/assets/images/LoadingAnimation_2.png');
const LOADING_ANIMATION_3 = require('../../../src/assets/images/LoadingAnimation_3.png');
const LOADING_ANIMATION_4 = require('../../../src/assets/images/LoadingAnimation_4.png');

interface LoadingAnimationProps {
  active?: boolean;
}

const generateRandomNumber = (number: number) => Math.random() * number;

const generateRandomStyles = (currentHeight: number, currentWidth: number) => ({
  top: generateRandomNumber(currentHeight),
  left: generateRandomNumber(currentWidth),
  width: generateRandomNumber(2000),
  height: generateRandomNumber(2000),
  transform: [{ rotate: generateRandomNumber(360) + 'deg' }],
});

const animations = {
  1: LOADING_ANIMATION_1,
  2: LOADING_ANIMATION_2,
  3: LOADING_ANIMATION_3,
  4: LOADING_ANIMATION_4,
} as Record<number, ImageSourcePropType>;

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  active,
}) => {
  const [activeAnimation, setActiveAnimation] = useState(1);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const animation = Animated.parallel([
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
      ),
    ]);
    animation.start();
    return () => {
      animation.stop();
    };
  }, []);

  useEffect(() => {
    const animation = setTimeout(() => {
      if (activeAnimation === 4) {
        setActiveAnimation(1);
      } else {
        setActiveAnimation(activeAnimation + 1);
      }
    }, 3000);
    return () => {
      clearTimeout(animation);
    };
  }, [activeAnimation]);

  const randomStyles = useCallback(
    () =>
      generateRandomStyles(
        Dimensions.get('window').height,
        Dimensions.get('window').width,
      ),
    [activeAnimation],
  );

  const opacity = useMemo(
    () => ({
      opacity: (fadeAnim as unknown) as number,
    }),
    [fadeAnim],
  );

  return active ? (
    <Animated.View style={{ ...opacity, ...styles.container }}>
      <Animated.Image
        source={animations[Number(activeAnimation as unknown)]}
        style={{ ...randomStyles(), ...styles.animation }}
      />
      <Animated.Image
        source={animations[Number(activeAnimation as unknown)]}
        style={{ ...randomStyles(), ...styles.animation }}
      />
      <Animated.Image
        source={animations[Number(activeAnimation as unknown)]}
        style={{ ...randomStyles(), ...styles.animation }}
      />
      <Animated.Image
        source={animations[Number(activeAnimation as unknown)]}
        style={{ ...randomStyles(), ...styles.animation }}
      />
      <Animated.Image
        source={animations[Number(activeAnimation as unknown)]}
        style={{ ...randomStyles(), ...styles.animation }}
      />
      <Animated.Image
        source={animations[Number(activeAnimation as unknown)]}
        style={{ ...randomStyles(), ...styles.animation }}
      />
    </Animated.View>
  ) : null;
};

import { Animated, Easing } from 'react-native';

export const fadeIn = (value: Animated.Value, duration: number = 300) => {
  return Animated.timing(value, {
    toValue: 1,
    duration,
    useNativeDriver: true,
  });
};

export const fadeOut = (value: Animated.Value, duration: number = 300) => {
  return Animated.timing(value, {
    toValue: 0,
    duration,
    useNativeDriver: true,
  });
};

export const slideIn = (value: Animated.Value, duration: number = 300) => {
  return Animated.timing(value, {
    toValue: 0,
    duration,
    useNativeDriver: true,
    easing: Easing.out(Easing.cubic),
  });
};

export const slideOut = (value: Animated.Value, duration: number = 300) => {
  return Animated.timing(value, {
    toValue: 100,
    duration,
    useNativeDriver: true,
    easing: Easing.in(Easing.cubic),
  });
};

export const scaleIn = (value: Animated.Value, duration: number = 300) => {
  return Animated.spring(value, {
    toValue: 1,
    duration,
    useNativeDriver: true,
    friction: 8,
  });
};

export const scaleOut = (value: Animated.Value, duration: number = 300) => {
  return Animated.spring(value, {
    toValue: 0,
    duration,
    useNativeDriver: true,
    friction: 8,
  });
}; 
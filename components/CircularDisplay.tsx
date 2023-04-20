import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

type CircularProgressProps = {
  radius: number;
  strokeWidth: number;
  progress: number;
  totalValue: number;
  isWorkTime: boolean;
};

const CircularProgress = ({
  radius,
  strokeWidth,
  progress,
  totalValue,
  isWorkTime,
}: CircularProgressProps) => {
  const circumference = 2 * Math.PI * radius;
  const progressOffset =
    circumference - (progress / totalValue) * (circumference * 0.921);

  return (
    <View style={styles.container}>
      <Svg style={styles.circle} width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="transparent"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={isWorkTime ? 'tomato' : 'teal'}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          fill="transparent"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    transform: [{rotateZ: '90deg'}],
    position: 'absolute',
    top: 160,
  },
});

export default CircularProgress;

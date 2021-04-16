import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated"
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash/lib/module/v1"

import Slide, { SLIDE_HEIGHT } from "./Slide";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

const Onboarding = () => {
  const x = useValue(0)
  console.log(x)
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD']
  })
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
        <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}>

        </View>
      </View>
    </View>
  );
};

export default Onboarding;

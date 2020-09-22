import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Slide, { SLIDER_HEIGHT } from "./components/Slide";
import Animated, { multiply, divide } from "react-native-reanimated";
import SubSlide from "./components/SubSlide";
import Dot from "./components/Dot";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    subtitle: "Find Your Outfits",
    description: "Description 1",
    picture: require("./assets/1.png"),
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subtitle: "Hear it First, Wear it First",
    description: "Description 2",
    picture: require("./assets/2.png"),
  },
  {
    title: "Excentric",
    color: "#FFE4D9",
    subtitle: "Your Style, Your Way",
    description: "Description 3",
    picture: require("./assets/3.png"),
  },
  {
    title: "Funky",
    color: "#FFDDDD",
    subtitle: "Look Good, Feel Good",
    description: "Description 4",
    picture: require("./assets/4.png"),
  },
];

const OnBoaring = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, i) => (
            <Slide key={i} right={!!(i % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [
                {
                  translateX: multiply(x, -1),
                },
              ],
            }}
          >
            {slides.map(({ description, subtitle }, i) => (
              <SubSlide
                onPress={() => {
                  if (scroll.current) {
                    scroll.current.getNode().scrollTo({
                      x: width * (i + 1),
                      animated: true,
                    });
                  }
                }}
                key={i}
                last={i === slides.length - 1}
                {...{ description, subtitle }}
              />
            ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default OnBoaring;

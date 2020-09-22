import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
  container: {
    width,
    overflow: "hidden",
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontSize: 70,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
    lineHeight: 80,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
    borderBottomRightRadius: 75,
    marginBottom: -160,
  },
});

export interface ISlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

const Slide = ({ title, right, picture }: ISlideProps) => {
  const transform = [
    {
      translateY: (SLIDER_HEIGHT - 100) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    {
      rotate: right ? "-90deg" : "90deg",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;

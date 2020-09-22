import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../../../components/Button/Button";

export interface ISubSlideProps {
  last?: boolean;
  description: string;
  subtitle: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    lineHeight: 30,
    color: "#0C0D34",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});

const SubSlide = ({ description, subtitle, last, onPress }: ISubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default SubSlide;

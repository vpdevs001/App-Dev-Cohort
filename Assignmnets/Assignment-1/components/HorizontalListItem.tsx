import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type HorizontalListItemProps = {
  task: string;
  place: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  progress: number;
  activeStrokeColor: string;
  inActiveStrokeColor: string;
};

const HorizontalListItem = ({
  task,
  place,
  icon,
  iconColor,
  progress,
  activeStrokeColor,
  inActiveStrokeColor,
}: HorizontalListItemProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          shadowColor: iconColor,
          shadowOffset: { height: 6, width: 0 },
          shadowOpacity: 0.4,
          shadowRadius: 12,
          elevation: 6,
        },
      ]}
    >
      <View style={[styles.iconWrapper, { borderColor: iconColor + "40" }]}>
        <Ionicons name={icon} size={16} color={iconColor} />
      </View>

      <Text style={styles.smText}>{place}</Text>
      <Text style={styles.lgText}>{task}</Text>

      <View style={styles.progressWrapper}>
        <View style={[styles.outer, { backgroundColor: inActiveStrokeColor }]}>
          <View
            style={[
              styles.inner,
              {
                width: `${progress}%`,
                backgroundColor: activeStrokeColor,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default HorizontalListItem;

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 160,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 20,
    backgroundColor: "#111111",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  iconWrapper: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  smText: {
    fontSize: 11,
    fontWeight: "600",
    color: "rgba(255,255,255,0.4)",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },

  lgText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: -0.2,
    flexShrink: 1,
  },

  progressWrapper: {
    gap: 6,
    marginTop: 4,
  },

  outer: {
    width: "100%",
    height: 5,
    borderRadius: 99,
    overflow: "hidden",
  },

  inner: {
    height: 5,
    borderRadius: 99,
  },
});

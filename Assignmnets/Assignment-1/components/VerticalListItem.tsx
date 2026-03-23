import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ProgressCircle from "./ProgressCircle";

interface VerticalListItemProps {
  group: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  totalTasks: number;
  progress: number;
  activeStrokeColor: string;
  inActiveStrokeColor: string;
}

const VerticalListItem = ({
  group,
  icon,
  iconColor,
  totalTasks,
  progress,
  activeStrokeColor,
  inActiveStrokeColor,
}: VerticalListItemProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          shadowColor: iconColor,
          shadowOffset: { height: 0, width: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 4,
        },
      ]}
    >
      <Pressable style={[styles.icon, { borderColor: iconColor + "40" }]}>
        <Ionicons name={icon} size={18} color={iconColor} />
      </Pressable>
      <View style={styles.textWrapper}>
        <Text style={styles.bigText}>{group}</Text>
        <Text style={styles.smallText}>{totalTasks} tasks</Text>
      </View>
      <View style={styles.progressContainer}>
        <ProgressCircle
          value={progress}
          radius={30}
          progressValueColor={iconColor}
          activeStrokeColor={activeStrokeColor}
          inActiveStrokeColor={inActiveStrokeColor}
          activeStrokeWidth={15}
          inActiveStrokeWidth={10}
        />
      </View>
    </View>
  );
};

export default VerticalListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 18,
    backgroundColor: "#111111",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textWrapper: {
    flex: 1,
    paddingHorizontal: 14,
    gap: 4,
  },
  bigText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: -0.2,
  },
  smallText: {
    fontSize: 13,
    color: "rgba(255,255,255,0.4)",
    letterSpacing: 0.2,
  },
  progressContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

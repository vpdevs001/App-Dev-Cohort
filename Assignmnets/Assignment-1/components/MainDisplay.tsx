import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressCircle from "./ProgressCircle";

const MainDisplay = () => {
  return (
    <View style={styles.outerWrapper}>
      <View style={styles.glowBlob} />

      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>TODAY</Text>
            </View>
          </View>

          <Text style={styles.headline}>You're almost there! 🔥</Text>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => console.log("pehli fursat mien nikal")}
          >
            <Text style={styles.buttonText}>See Tasks</Text>
            <Ionicons name="arrow-forward" size={16} color="#00eace" />
          </Pressable>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.ringWrapper}>
            <ProgressCircle
              value={85}
              radius={60}
              activeStrokeWidth={14}
              inActiveStrokeWidth={10}
              progressValueColor={"#ffffff"}
              inActiveStrokeColor={"rgba(255,255,255,0.15)"}
              activeStrokeColor={"#00eace"}
            />
          </View>

          <Pressable style={styles.moreButton}>
            <Ionicons name="ellipsis-horizontal" size={16} color="#1a1a1a" />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerWrapper: {
    marginHorizontal: 16,
    borderRadius: 28,
    overflow: "hidden",
    shadowColor: "#00eace",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 12,
  },

  glowBlob: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "rgba(0,234,206,0.35)",
    top: -40,
    right: -30,
  },

  container: {
    backgroundColor: "#111111",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 24,
    gap: 20,
    position: "relative",
  },

  textContainer: {
    flex: 1,
    gap: 10,
  },

  badgeRow: {
    flexDirection: "row",
  },

  badge: {
    backgroundColor: "rgba(0,234,206,0.15)",
    borderColor: "rgba(0,234,206,0.4)",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  badgeText: {
    color: "#00eace",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  headline: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 28,
    letterSpacing: -0.3,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    alignSelf: "flex-start",
    backgroundColor: "#1e1e1e",
    borderColor: "rgba(0,234,206,0.35)",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginTop: 6,
  },

  buttonPressed: {
    backgroundColor: "#2a2a2a",
    borderColor: "#00eace",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.2,
  },

  progressContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  ringWrapper: {
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: 999,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },

  moreButton: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#00eace",
    borderRadius: 99,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainDisplay;

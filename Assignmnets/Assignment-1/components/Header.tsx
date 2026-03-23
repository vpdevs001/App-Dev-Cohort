import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image
          source={{
            uri: "https://pixabay.com/images/download/u_ajafzlcfz4-ved-10188448_1920.jpg",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.smText}>Kudos,</Text>
        <Text style={styles.boldText}>Ved Pandey</Text>
      </View>

      <Pressable style={styles.iconButton}>
        <Ionicons name="notifications" size={20} color="#ffffff" />
        <View style={styles.notifBadge} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  avatarWrapper: {
    position: "relative",
    marginRight: 14,
    borderRadius: 999,
    padding: 2,
    borderWidth: 2,
    borderColor: "#00eace",
  },

  image: {
    height: 46,
    width: 46,
    borderRadius: 999,
  },

  textContainer: {
    flex: 1,
    gap: 1,
  },

  smText: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    letterSpacing: 0.3,
  },

  boldText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "Poppins_400Regular",
    letterSpacing: -0.3,
  },

  iconButton: {
    position: "relative",
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#1e1e1e",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
    alignItems: "center",
    justifyContent: "center",
  },

  notifBadge: {
    position: "absolute",
    top: 9,
    right: 9,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#00eace",
    borderWidth: 1.5,
    borderColor: "#111111",
  },
});

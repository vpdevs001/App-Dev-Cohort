import VerticalCard from "@/components/VerticalCard";
import { StyleSheet } from "react-native";

export default function App() {
  return <VerticalCard />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },

  content: {
    paddingBottom: 48,
    gap: 24,
  },
});

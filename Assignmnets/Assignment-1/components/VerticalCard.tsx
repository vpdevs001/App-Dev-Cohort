import { taskGroups } from "@/utils/data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import HorizontalTask from "./HorizontalTask";
import MainDisplay from "./MainDisplay";
import VerticalListItem from "./VerticalListItem";

const VerticalCard = () => {
  const renderItem = ({ item }: { item: (typeof taskGroups)[number] }) => {
    return <VerticalListItem {...item} />;
  };

  return (
    <FlatList
      data={taskGroups}
      renderItem={renderItem}
      keyExtractor={(item) => item.group}
      style={styles.screen}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      ListHeaderComponent={() => (
        <View style={styles.headerWrapper}>
          <Header />
          <MainDisplay />
          <HorizontalTask />
          <Text style={styles.heading}>Task Groups</Text>
        </View>
      )}
    />
  );
};

export default VerticalCard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
  content: {
    paddingBottom: 48,
  },
  headerWrapper: {
    gap: 16,
    marginBottom: 4,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 20,
    marginBottom: 0,
  },
});

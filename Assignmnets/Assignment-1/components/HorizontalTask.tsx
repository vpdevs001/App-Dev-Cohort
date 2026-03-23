import { tasks } from "@/utils/data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import HorizontalListItem from "./HorizontalListItem";

const HorizontalTask = () => {
  const renderItem = ({ item }: { item: (typeof tasks)[number] }) => {
    return <HorizontalListItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>In Progress</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.place}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        contentContainerStyle={styles.listContent}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalTask;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingHorizontal: 16,
  },
});

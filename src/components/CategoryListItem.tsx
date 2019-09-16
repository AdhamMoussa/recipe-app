import React from "react";
import { TouchableHighlight, Text, StyleSheet, View } from "react-native";

import Category from "../models/category";

interface IProps {
  item: Category;
  onPress: (id: string) => void;
}

const CategoryListItem: React.FC<IProps> = props => {
  const { item, onPress } = props;

  return (
    <TouchableHighlight
      style={{
        ...styles.itemContainer,
        ...{ backgroundColor: item.color }
      }}
      onPress={() => onPress(item.id)}
    >
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderRadius: 5,
    elevation: 3,
    margin: 15,
    padding: 15
  },
  item: {
    flex: 1,
    paddingTop: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  itemText: {
    color: "#fff",
    position: "absolute",
    width: "100%",
    textAlign: "right"
  }
});

export default CategoryListItem;

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBarProps } from "./search-bar.props";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const onCategorySearchBtnPress = () => {
    console.log("On Category Search Button Press");
  };
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" style={styles.icon} />
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search"
        style={styles.input}
        onSubmitEditing={() => onSearch(searchText)}
      />
      <TouchableOpacity onPress={onCategorySearchBtnPress}>
        <Text style={styles.categoryText}>Category Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    zIndex: 1,
    position: "absolute",
    top: 30,
  },
  icon: {
    fontSize: 24,
    color: "#9a9a9a",
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginLeft: 4,
    paddingVertical: 0,
  },
  categoryText: {
    color: "blue",
    fontWeight: "bold",
  },
});

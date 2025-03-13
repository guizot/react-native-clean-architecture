import React from "react";
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const MainScreen = () => {
  const navigation = useNavigation();

  const onPress = (id : never) => {
    navigation.navigate(id);
  };

  const data = [
    { id: 'GithubList', title: 'Github List', subtitle: 'Implementation using http, local database' },
  ];

  const renderItem = ({ item }: { item: { id: string; title: string; subtitle: string; } }) => (
    <TouchableOpacity onPress={
      () => onPress(item.id as never)
    } style={styles.item}>
      <View style={styles.tile}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="black" style={styles.trailing} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'grey',
  },
  tile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leading: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: 'grey',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'grey',
  },
  trailing: {
    marginLeft: 16,
  },
});

export default MainScreen;
import React from "react";
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const MainScreen = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("NotFound");
  };

  const data = [
    { id: '1', title: 'Item 1', subtitle: 'Subtitle 1', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg' },
    { id: '2', title: 'Item 2', subtitle: 'Subtitle 2', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
    { id: '3', title: 'Item 3', subtitle: 'Subtitle 3', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
    { id: '4', title: 'Item 4', subtitle: 'Subtitle 4', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
    { id: '5', title: 'Item 5', subtitle: 'Subtitle 5', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
    { id: '6', title: 'Item 6', subtitle: 'Subtitle 6', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
    { id: '7', title: 'Item 7', subtitle: 'Subtitle 7', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
    { id: '8', title: 'Item 8', subtitle: 'Subtitle 8', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
    { id: '9', title: 'Item 9', subtitle: 'Subtitle 9', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
    { id: '10', title: 'Item 10', subtitle: 'Subtitle 10', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
    { id: '11', title: 'Item 11', subtitle: 'Subtitle 11', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
    { id: '12', title: 'Item 12', subtitle: 'Subtitle 12', url: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg'  },
  ];

  const renderItem = ({ item }: { item: { id: string; title: string; subtitle: string; url: string } }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.tile}>
        {/* <Image
          source={{ uri: item.url }}
          style={styles.leading}
        /> */}
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
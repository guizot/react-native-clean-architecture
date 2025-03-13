import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import GithubEntity from "src/github/domain/entities/GithubEntity";
import { Ionicons } from '@expo/vector-icons';

interface GithubItemProps {
  github: GithubEntity;
}

const GithubItem = ({ github }: GithubItemProps) => {
  const { login, url, avatar_url } = github;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("GithubDetail", { username: github.login });
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.tile}>
      <Image
          source={{ uri: avatar_url }}
          style={styles.leading}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{login}</Text>
          <Text style={styles.subtitle}>{url}</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="black" style={styles.trailing} />
      </View>
    </TouchableOpacity>
  );
};

export default GithubItem;

const styles = StyleSheet.create({
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
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GithubEntity from "src/github/domain/entities/GithubEntity";

interface GithubItemProps {
  github: GithubEntity;
}

const GithubItem = ({ github }: GithubItemProps) => {
  const { login, url } = github;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("GithubDetail", { username: github.login });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{login}</Text>
        <Text style={styles.body}>{url}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GithubItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
  },
});

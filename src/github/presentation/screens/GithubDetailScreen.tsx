import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { RootStackScreenProps } from "src/core/presentation/navigation/types";
import { useI18n } from "src/core/presentation/hooks/useI18n";
import { withProviders } from "src/core/presentation/utils/withProviders";
import { observer } from "mobx-react";
import { useFindGithubStore } from "../stores/FindGithubStore/useFindGithubStore";
import { FindGithubStoreProvider } from "../stores/FindGithubStore/FindGithubStoreProvider";

const GithubDetailScreen = observer(({ route }: RootStackScreenProps<"GithubDetail">) => {
  const { username } = route.params;
  const i18n = useI18n();
  const findGithubStore = useFindGithubStore();
  const { github, isLoading } = findGithubStore;

  useEffect(() => {
    findGithubStore.findGithub(username);
  }, [findGithubStore, username]);

  return isLoading ? (
    <Text>{i18n.t("github.screens.GithubDetail.loading")}</Text>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{github?.login}</Text>
      <Text style={styles.body}>{github?.url}</Text>
    </View>
  );
});

export default withProviders(FindGithubStoreProvider)(GithubDetailScreen);

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

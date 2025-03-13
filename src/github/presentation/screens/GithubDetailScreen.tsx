import { useEffect } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
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

  const loadingComponent = (
      <View style={styles.container}>
        <View style={styles.item}>
        <View style={styles.tile}>
          <ActivityIndicator size={36}/>
          {/* <Text>{i18n.t("github.screens.GithubDetail.loading")}</Text> */}
        </View>
      </View>
      </View>
  );

  return isLoading ? (
    loadingComponent
  ) : (
    <View style={styles.container}>
      <Image
          source={{ uri: github?.avatar_url }}
          style={styles.leading}
        />
      <Text style={styles.title}>{github?.login}</Text>
      <Text style={styles.body}>{github?.url}</Text>
    </View>
  );
});

export default withProviders(FindGithubStoreProvider)(GithubDetailScreen);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: "center",
  },
  leading: {
    width: 120,
    height: 120,
    borderRadius: 36,
    alignSelf: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: 'center',
  },
  body: {
    fontSize: 14,
    textAlign: 'center',
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
    justifyContent: 'center',
  },
});

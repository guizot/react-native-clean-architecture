import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";

import { useI18n } from "src/core/presentation/hooks/useI18n";
import GithubItem from "../components/GithubItem";
import { observer } from "mobx-react";
import { withProviders } from "src/core/presentation/utils/withProviders";
import { useGetGithubStore } from "../stores/GetGithubStore/useGetGithubStore";
import { GetGithubStoreProvider } from "../stores/GetGithubStore/GetGithubStoreProvider";

const GithubListScreen = observer(() => {
  const i18n = useI18n();
  const getGithubStore = useGetGithubStore();
  const { isLoading, results } = getGithubStore;

  useEffect(() => {
    getGithubStore.getGithub();
  }, [getGithubStore]);

  return (
    <View>
      {isLoading ? (
        <Text>{i18n.t("github.screens.GithubList.loading")}</Text>
      ) : (
        <FlatList
          data={results}
          renderItem={({ item }) => <GithubItem github={item} />}
        />
      )}
    </View>
  );
});

export default withProviders(GetGithubStoreProvider)(GithubListScreen);

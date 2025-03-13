import { useEffect } from "react";
import { StyleSheet, FlatList, Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { useI18n } from "src/core/presentation/hooks/useI18n";
import GithubItem from "../components/GithubItem";
import { observer } from "mobx-react";
import { withProviders } from "src/core/presentation/utils/withProviders";
import { useGetGithubStore } from "../stores/GetGithubStore/useGetGithubStore";
import { GetGithubStoreProvider } from "../stores/GetGithubStore/GetGithubStoreProvider";

const GithubListScreen = observer(() => {
  const i18n = useI18n();
  const getGithubStore = useGetGithubStore();
  const { isLoading, results, count, pagination, error } = getGithubStore;

  useEffect(() => {
    getGithubStore.getGithub();
  }, [getGithubStore]);

  const handleLoadMore = () => {
    if (
      !isLoading &&
      results.length < count &&
      results.length >= pagination.pageSize * pagination.page
    ) {
      getGithubStore.mergePagination({ page: pagination.page + 1 });
      getGithubStore.getGithub();
    }
  };

  const handleRefresh = () => {
    getGithubStore.mergePagination({ page: 1 });
    getGithubStore.getGithub();
  };

  const errorComponent = (
      <View style={styles.item}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          {error && <Text>{error}</Text> }
          <TouchableOpacity style={styles.button} onPress={() => getGithubStore.getGithub()}>
            <Text style={styles.buttonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </View>
  );

  const loadingComponent = (
      <View style={styles.item}>
        <View style={styles.tile}>
          <ActivityIndicator size={36}/>
          {/* <Text>{i18n.t("github.screens.GithubList.loading")}</Text> */}
        </View>
      </View>
  );

  return (
    <View style={styles.container}>
      {
        error && pagination.page === 1 ? <View style={styles.list}>{errorComponent}</View> :
        isLoading && pagination.page === 1 ? <View style={styles.list}>{loadingComponent}</View> :
        (
          <FlatList
            refreshing={isLoading && pagination.page === 1}
            onRefresh={handleRefresh}
            contentContainerStyle={styles.list}
            data={results}
            renderItem={({ item }) => <GithubItem github={item} />}
            keyExtractor={(item) => item.login.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              pagination.page > 1 ? 
              <View>
                { error && errorComponent }
                { isLoading && loadingComponent }
              </View>
              : null
            }
          />
        )
      }
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
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
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    alignSelf: 'stretch',
    paddingVertical: 10,
    backgroundColor: 'red',
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default withProviders(GetGithubStoreProvider)(GithubListScreen);

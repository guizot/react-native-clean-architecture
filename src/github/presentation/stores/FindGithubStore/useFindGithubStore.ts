import { FindGithubStore } from "./FindGithubStore";
import { FindGithubStoreContext } from "./FindGithubStoreContext";
import { useContextStore } from "src/core/presentation/hooks/useContextStore";

export const useFindGithubStore = (): FindGithubStore => {
  const store = useContextStore(FindGithubStoreContext);

  return store;
};

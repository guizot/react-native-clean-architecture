import { useContextStore } from "src/core/presentation/hooks/useContextStore";
import { GetGithubStore } from "./GetGithubStore";
import { GetGithubStoreContext } from "./GetGithubStoreContext";

export const useGetGithubStore = (): GetGithubStore => {
  const store = useContextStore(GetGithubStoreContext);

  return store;
};

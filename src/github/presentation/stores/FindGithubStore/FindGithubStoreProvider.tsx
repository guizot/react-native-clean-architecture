import { PropsWithChildren } from "react";
import { FindGithubStoreContext } from "./FindGithubStoreContext";
import { FindGithubStore } from "./FindGithubStore";
import { githubModuleContainer } from "@/src/github/GithubModule";

export const FindGithubStoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <FindGithubStoreContext.Provider
      value={githubModuleContainer.get(FindGithubStore)}
    >
      {children}
    </FindGithubStoreContext.Provider>
  );
};

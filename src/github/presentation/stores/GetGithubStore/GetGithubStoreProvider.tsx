import { PropsWithChildren } from "react";
import { GetGithubStore } from "./GetGithubStore";
import { GetGithubStoreContext } from "./GetGithubStoreContext";
import { githubModuleContainer } from "@/src/github/GithubModule";

export const GetGithubStoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <GetGithubStoreContext.Provider
      value={githubModuleContainer.get(GetGithubStore)}
    >
      {children}
    </GetGithubStoreContext.Provider>
  );
};

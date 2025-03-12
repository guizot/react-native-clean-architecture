import { createContext } from "react";
import { FindGithubStore } from "./FindGithubStore";

export const FindGithubStoreContext = createContext<FindGithubStore | null>(null);

FindGithubStoreContext.displayName = "FindGithubStoreContext";

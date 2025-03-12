import { createContext } from "react";
import { GetGithubStore } from "./GetGithubStore";

export const GetGithubStoreContext = createContext<GetGithubStore | null>(null);

GetGithubStoreContext.displayName = "GetGithubStoreContext";

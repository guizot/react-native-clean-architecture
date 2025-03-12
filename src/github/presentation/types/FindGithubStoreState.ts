import GithubEntity from "src/github/domain/entities/GithubEntity";

export default interface FindGithubStoreState {
  isLoading: boolean;
  github: GithubEntity | null;
}

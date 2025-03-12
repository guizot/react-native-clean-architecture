import GithubEntity from "src/github/domain/entities/GithubEntity";

export default interface GetGithubResponse {
  items: GithubEntity[];
  total_count: number;
  incomplete_results: boolean;
}

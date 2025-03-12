import GithubEntity from "../entities/GithubEntity";
import GetGithubPayload from "../../application/types/GetGithubPayload";
import GetGithubResponse from "src/github/application/types/GetGithubResponse";

export const IGithubRepositoryToken = Symbol("IGithubRepository");

export interface IGithubRepository {
  find: (username: string) => Promise<GithubEntity>;
  get: (data: GetGithubPayload) => Promise<GetGithubResponse>;
}

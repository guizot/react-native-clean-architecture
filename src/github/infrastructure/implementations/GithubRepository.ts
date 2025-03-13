import GetGithubPayload from "src/github/application/types/GetGithubPayload";
import { injectable, inject } from "inversiland";
import { IGithubRepository } from "../../domain/specifications/IGithubRepository";
import GetGithubResponse from "src/github/application/types/GetGithubResponse";
import { plainToInstance } from "class-transformer";
import IHttpClient, {
  IHttpClientToken,
} from "src/core/domain/specifications/IHttpClient";
import GithubDto from "../models/GithubDto";

@injectable()
class GithubRepository implements IGithubRepository {
  private readonly baseUrl = "/users";

  constructor(
    @inject(IHttpClientToken) private readonly httpClient: IHttpClient
  ) {}

  public async find(username: string) {
    const response = await this.httpClient.get(
      `${this.baseUrl}/${username}`
    );
    const responseDto = plainToInstance(GithubDto, response);

    return responseDto.toDomain();
  }

  public async get({ page, pageSize }: GetGithubPayload): Promise<GetGithubResponse> {
    const github = await this.httpClient.get<GetGithubResponse>(
      `/search/users`,
      {
        params: {
          q: "followers:>10000",
          per_page: `${pageSize}`,
          page: `${page}`
        }
      }
    );
    const response: GetGithubResponse = {
      items: github.items.map((github) => plainToInstance(GithubDto, github).toDomain()),
      total_count: github.total_count,
      incomplete_results: github.incomplete_results
    };

    return response;
  }
}

export default GithubRepository;

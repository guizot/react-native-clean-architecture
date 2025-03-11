import GetPostsPayload from "src/post/application/types/GetPostsPayload";
import { injectable, inject } from "inversiland";
import { IPostRepository } from "../../domain/specifications/IPostRepository";
import GetPostsResponse from "src/post/application/types/GetPostsResponse";
import PostDto from "../models/PostDto";
import { plainToInstance } from "class-transformer";
import IHttpClient, {
  IHttpClientToken,
} from "src/core/domain/specifications/IHttpClient";

@injectable()
class PostRepository implements IPostRepository {
  private readonly baseUrl = "/posts";

  constructor(
    @inject(IHttpClientToken) private readonly httpClient: IHttpClient
  ) {}

  public async find(id: number) {
    const response = await this.httpClient.get(`${this.baseUrl}/${id}`);
    const responseDto = plainToInstance(PostDto, response);

    return responseDto.toDomain();
  }

  public async get({}: GetPostsPayload): Promise<GetPostsResponse> {
    const posts = await this.httpClient.get<GetPostsResponse>(
      `/search/users`,
      {
        params: {
          q: "followers:>10000",
          per_page: "10",
          page: "1"
        }
      }
    );
    const response: GetPostsResponse = {
      items: posts.items.map((post) => plainToInstance(PostDto, post).toDomain()),
      total_count: posts.total_count,
      incomplete_results: posts.incomplete_results
    };

    return response;
  }
}

export default PostRepository;

import PayloadDto from "src/core/infrastructure/models/PayloadDto";
import GetGithubPayload from "src/github/application/types/GetGithubPayload";
import { Expose } from "class-transformer";

export default class GetGithubQuery extends PayloadDto<GetGithubPayload> {
  @Expose()
  page!: number;

  @Expose()
  pageSize!: number;

  transform(payload: GetGithubPayload) {
    return {
      page: payload.page,
      pageSize: payload.pageSize,
    };
  }
}

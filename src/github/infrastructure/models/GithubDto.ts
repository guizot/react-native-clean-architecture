import { Expose } from "class-transformer";
import ResponseDto from "src/core/infrastructure/models/ResponseDto";
import GithubEntity from "src/github/domain/entities/GithubEntity";

export default class GithubDto extends ResponseDto<GithubEntity> {
  @Expose()
  login!: string;

  @Expose()
  url!: string;

  @Expose()
  avatar_url!: string;

  toDomain() {
    return {
      login: this.login,
      url: this.url,
      avatar_url: this.avatar_url
    };
  }
}

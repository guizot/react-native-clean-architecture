import { Expose } from "class-transformer";
import ResponseDto from "src/core/infrastructure/models/ResponseDto";
import PostEntity from "src/post/domain/entities/PostEntity";

export default class PostDto extends ResponseDto<PostEntity> {
  @Expose()
  login!: string;

  @Expose()
  url!: string;

  toDomain() {
    return {
      login: this.login,
      url: this.url,
    };
  }
}

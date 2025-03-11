import PostEntity from "src/post/domain/entities/PostEntity";

export default interface GetPostsResponse {
  items: PostEntity[];
  total_count: number;
  incomplete_results: boolean;
}
